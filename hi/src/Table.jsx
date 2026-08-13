function Table(props){
    return(
        
        <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-black-600">
          Hello World
        </h1>
      
    
      <h1 className="text-1xl font-bold text-white mb-4">
        Student Table
      </h1>

      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">ID</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Age</th>
            <th className="border p-3">Course</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">1</td>
            <td className="border p-3">{props.name}</td>
            <td className="border p-3">{props.age}</td>
            <td className="border p-3">{props.course}</td>
          </tr>

          <tr>
            <td className="border p-3">2</td>
            <td className="border p-3">Priya</td>
            <td className="border p-3">21</td>
            <td className="border p-3">JavaScript</td>
          </tr>
        </tbody>
      </table>
    </div>
  

      </div>
    
    

    );

}

export default Table