//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

const ItemPerson = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    return (
        <>
            <table border="1">
                <tbody>
                    <tr>
                        <th>이름(name)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>핸드폰(hp)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>회사(company)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Link to="" rel="noreferrer noopener">[수정폼으로 이동]</Link></td>
                        <td><button type="button" >삭제</button></td>
                    </tr>

                </tbody>
            </table>
            <br />
        </>
    );
}

export default ItemPerson;
