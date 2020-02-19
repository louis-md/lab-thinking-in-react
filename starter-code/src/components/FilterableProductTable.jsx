import React from 'react'
import SearchBar from "./SearchBar.jsx"
import ProductTable from "./ProductTable.jsx"


export default function FilterableProductTable() {
    return (
        <div>
          <h1>IronStore</h1>
          <SearchBar />
          <ProductTable />  
        </div>
    )
}

