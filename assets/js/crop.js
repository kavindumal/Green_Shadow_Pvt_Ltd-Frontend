document.addEventListener('DOMContentLoaded', function() {
    const cropTableBody = document.querySelector('table tbody');


    sampleCrops.forEach(crop => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${crop.cropCode}</td>
            <td>${crop.name}</td>
            <td>${crop.scientificName}</td>
            <td>${crop.category}</td>
            <td>${crop.season}</td>
            <td>${crop.fieldAssignment}</td>
            <td>
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
        `;

        cropTableBody.appendChild(row);
    });
});