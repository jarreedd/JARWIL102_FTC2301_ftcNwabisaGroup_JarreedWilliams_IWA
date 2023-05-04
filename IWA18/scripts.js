import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
import { createOrderData, updateDragging } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


// const handleDragStart = (event) => {}
// const handleDragEnd = (event) => {}

const handleHelpToggle = (event) => {
    html.help.overlay.showModal()

    html.help.cancel.addEventListener('click', () => {
        html.help.overlay.close()
    })
}

const handleAddToggle = (event) => {
    html.add.overlay.showModal()
    
    html.add.cancel.addEventListener("click", () => {
        html.add.overlay.close()
    })
}

const handleAddSubmit = (event) => {
    event.preventDefault();

    const data = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: 'ordered'
    }
    const orderHtml = createOrderHtml(createOrderData(data))
    document.querySelector('[data-column="ordered"]').appendChild(orderHtml)
    html.add.overlay.close();
}

let orderId

const handleEditToggle = (event) => {
    event.preventDefault()
    html.edit.overlay.showModal()

    orderId = event.target.closest('.order')
    html.add.title.value = orderId.querySelector('[data-order-title]').innerText
    html.add.table.value = orderId.querySelector('[data-order-table]').innerText

    html.edit.cancel.addEventListener('click', () => {
        html.edit.overlay.close()
    })

}

const handleEditSubmit = (event) => {
    event.preventDefault();
    orderId.remove()
    
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value
    }
    const orderHtml = createOrderHtml(createOrderData(data))
    document.querySelector(`[data-column="${data.column}"]`).appendChild(orderHtml)
    html.edit.overlay.close()
}

const handleDelete = (event) => {
    orderId.remove()
    html.edit.overlay.close()

}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}