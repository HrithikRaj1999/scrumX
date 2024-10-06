export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-black dark:text-gray-200";

  export const dataGridSxStyles = (isDarkMode: boolean) => {
    return {
      // Styling for column headers
      "& .MuiDataGrid-columnHeaders": {
        color: `${isDarkMode ? "white" : ""}`,
        '& [role="row"] > *': {
          backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
          borderColor: `${isDarkMode ? "#2d3135" : ""}`,
        },
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      // Styling for the sort icon in column headers
      "& .MuiDataGrid-sortIcon": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      // Styling for icons in buttons within the DataGrid
      "& .MuiIconButton-root": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      // Styling for icons (like sort icons, filters, etc.)
      "& .MuiSvgIcon-root": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      // Styling for the pagination controls
      "& .MuiTablePagination-root": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      "& .MuiTablePagination-selectIcon": {
        color: isDarkMode ? "#FFFFFF" : "#000000",
      },
      // Styling for individual rows
      "& .MuiDataGrid-row": {
        backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
        borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
      },
      // Remove the border from each cell
      "& .MuiDataGrid-cell": {
        borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
      },
      // Styling for the footer container (pagination controls)
      "& .MuiDataGrid-footerContainer": {
        backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
      },
      // Add specific focus/hover states if necessary for better UI in dark mode
      "& .MuiDataGrid-cell:focus": {
        outline: "none", // Removes default focus outline
      },
      "& .MuiDataGrid-row:hover": {
        backgroundColor: isDarkMode ? "#2b2f33" : "#f5f5f5",
      },
    };
  };

  