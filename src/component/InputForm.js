const FormComponent = ()=>{
    return(
        <div>
            <form>
                <div>
                    <label>ชื่อรายการ</label><input type ="text" placeholder="ระบุชื่อรายการ"/>
                </div>
                <div>
                <label>จำนวนเงิน</label><input type ="number" placeholder="(+รายจ่าย,-รายรับ)"/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
        

    )
}