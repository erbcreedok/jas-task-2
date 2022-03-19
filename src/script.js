function drawRow(item, index) {
    return `
    <tr>
        <td>${index}</td>
        <td>
            <div class="name_col">
                ${item.name}
            </div>
        </td>
        <td>${item.price}</td>
        <td>${item.count}</td>
        <td>${item.instalment ? '✅' : ''}</td>
    </tr>
    `
}

function drawTable(data) {
    return `
    <table class="table">
        <tbody>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>В рассрочку</th>
            </tr>
            ${data.map(drawRow).join('')}
        </tbody>
    </table>
    `
}

function render() {
    const tableRef = document.getElementById('table')
    tableRef.innerHTML = drawTable(tableData)
}

render()