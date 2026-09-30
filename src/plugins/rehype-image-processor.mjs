import { SKIP, visit } from 'unist-util-visit'

function toClassList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean)
  }

  if (typeof value === 'string') {
    return value.split(/\s+/).filter(Boolean)
  }

  return []
}

/**
 * Rehype plugin that processes images in markdown content:
 * - Wraps images with alt text in figure/figcaption elements
 * - Adds data-preview attribute for image viewer functionality
 * - Adds lazy loading for better performance
 * - Handles multiple images in a single paragraph
 */
export default function rehypeImageProcessor() {
  return (tree) => {
    let hasPriorityImage = false

    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') {
        return
      }

      const existingClasses = [...toClassList(node.properties?.className), ...toClassList(node.properties?.class)]
      const shouldPrioritizeImage = !hasPriorityImage

      hasPriorityImage = true

      // Enhanced image properties with performance optimizations
      node.properties = {
        ...node.properties,
        'data-preview': 'true',
        // Add lazy loading for better performance
        loading: 'lazy',
        // Add decoding hint for better performance
        decoding: 'async',
        // Add fetchpriority for critical images (first content image gets high priority)
        ...(shouldPrioritizeImage ? { fetchpriority: 'high' } : {}),
        className: existingClasses.includes('img-placeholder')
          ? existingClasses
          : [...existingClasses, 'img-placeholder']
      }
    })

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'p') {
        return
      }
      if (!parent || typeof index !== 'number') {
        return
      }

      const imgNodes = []
      let hasNonImageContent = false

      for (const child of node.children) {
        if (child.type === 'element' && child.tagName === 'img') {
          imgNodes.push(child)
        } else if (child.type !== 'text' || child.value.trim() !== '') {
          hasNonImageContent = true
        }
      }

      if (hasNonImageContent || imgNodes.length === 0) {
        return
      }

      const newNodes = []

      for (const imgNode of imgNodes) {
        const alt = imgNode.properties?.alt?.trim()

        if (!alt || alt.includes('_')) {
          newNodes.push(imgNode)
          continue
        }

        const figure = {
          type: 'element',
          tagName: 'figure',
          properties: {
            className: ['image-caption-wrapper']
          },
          children: [
            imgNode,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {
                className: ['img-caption']
              },
              children: [
                {
                  type: 'text',
                  value: alt
                }
              ]
            }
          ]
        }

        newNodes.push(figure)
      }

      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes)
        return index + newNodes.length - 1
      }
    })

    visit(tree, 'element', (node) => {
      if (!node.children?.length) {
        return
      }

      if (toClassList(node.properties?.className).includes('image-row')) {
        return SKIP
      }

      const grouped = []
      let index = 0

      while (index < node.children.length) {
        if (!isCaptionFigure(node.children[index])) {
          grouped.push(node.children[index])
          index += 1
          continue
        }

        const row = []
        while (index < node.children.length && isCaptionFigure(node.children[index])) {
          row.push(node.children[index])
          index += 1
        }

        if (row.length > 1) {
          grouped.push({
            type: 'element',
            tagName: 'div',
            properties: {
              className: ['image-row']
            },
            children: row
          })
        } else {
          grouped.push(row[0])
        }
      }

      node.children = grouped
    })
  }
}

function isCaptionFigure(node) {
  return (
    node?.type === 'element' &&
    node.tagName === 'figure' &&
    toClassList(node.properties?.className).includes('image-caption-wrapper')
  )
}
