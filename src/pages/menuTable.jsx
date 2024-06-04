import 'react-data-grid/lib/styles.css';
import React from "react"
import DataGrid, { SelectColumn, textEditor } from 'react-data-grid';


const MenuTable = () => {
    const columns = [
        { key: 'id', name: 'ID'},
        { key: 'title', name: 'Title'},
        { key: 'complete', name: 'Complete'}
      ];
      

    const rows = [
        { id: 1, title: 'Task 1', complete: 20 },
        { id: 2, title: 'Task 2', complete: 40 },
        { id: 3, title: 'Task 3', complete: 60 },
        { id: 4, title: 'Task 4', complete: 80 },
        { id: 5, title: 'Task 5', complete: 100 }
      ];

    return (
        <div style={{ height: 400, width: '100%', border: '1px solid #ccc' }}>
            <DataGrid
                columns={columns}
                rows={rows}
            />
        </div>
    )
}

export default MenuTable