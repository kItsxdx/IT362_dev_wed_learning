const Item =(props)=>{



    return(
        <li
        style={{marginBottom: "10px", // ระยะห่างระหว่างกล่อง
            borderRadius: "5px", // มุมโค้ง
            overflow: "hidden", // แถบสีแนบขอบ
            display: "flex", // จัดเรียงแบบแนวนอน
            alignItems: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
            backgroundColor: "#fff", // พื้นหลังกล่อง
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // เงา
            borderRight: `5px solid ${props.amount > 0 ? "blue" : "red"}`, // สีแถบซ้าย
          }}>


            
            <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}>
  
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>{props.title}</span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: props.amount > 0 ? "blue" : "red",
                  }}>
    
      
      
      {props.amount > 0 ? `+${props.amount}` : props.amount}
    </span>
    <p>บาท</p>
  </div>
            
            
            
            
            
            </li>
    )


  
}

export default Item;