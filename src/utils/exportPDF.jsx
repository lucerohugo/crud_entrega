import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportPDF = (data, title, columns) => { //mi funcion para exportar los datos
    const doc = new jsPDF();  //creo un doc nuevo de pdf

    doc.text(`${title}`, 14, 10);  

    const tableColumn = columns;  
    const tableRows = [];  

    data?.forEach(item => {
        const row = [item._id, item.name, item.color, item.age, item.power];  //mi array de datos,id,nomnbre,color,edad,poder
        tableRows.push(row);
    });

    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
    });

    doc.save(`${title}.pdf`);
};
