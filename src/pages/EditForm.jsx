//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const EditForm = () => {
    /*---라우터 관련-------------------------------*/
    const { no } = useParams();    
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [company, setCompany] = useState('');

    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    //로딩->마운트되었을때
    useEffect(()=>{
        console.log("마운트 되었을때");
        console.log(no);
        //서버로 no값 보내서 no데이터 받기 그리고 화면에 출력하기

        axios({
            method: 'get', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons/'+no,
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.result); //수신데이타
            //console.log(response.data.apiData.name); //수신데이타

            if(response.data.result === 'success'){
                //useState 사용해서 값 대입
                setName(response.data.apiData.name);
                setHp(response.data.apiData.hp);
                setCompany(response.data.apiData.company);

            }else {
                //실패로직 리스트로 보내기
                navigate("/list");
            }

        
        }).catch(error => {
            console.log(error);
        });

    }, []);

    //name값이 변경되었을때
    const handleName = (e)=>{
        setName(e.target.value);
    };

    //hp값이 변경되었을때
    const handleHp = (e)=>{
        setHp(e.target.value);
    };

    //company값이 변경되었을때
    const handleCompany = (e)=>{
        setCompany(e.target.value);
    };

    //수정버튼을 클릭했을때
    const handleUpdate = (e)=>{
        e.preventDefault();
        
        const personVo = {
            name: name,
            hp: hp,
            company: company
        }
        console.log(personVo);
        axios({
            method: 'put', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons/'+no,
        
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            data: personVo,     // put, post,  JSON(자동변환됨)
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response.data.result); //수신데이타

            if(response.data.result === 'success'){
                //성공로직
                navigate("/list");
            }else{
                alert(response.data.message);
            }

        
        }).catch(error => {
            console.log(error);
        });
        

    };

    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-수정폼</h2>

            <p>수정할 항목을 입력한 후 수정버튼을 클릭해 주세요</p>

            <form action="" method="" onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="txt-name">이름(name):</label>
                    <input id="txt-name" type="text" name="" value={name} placeholder="이름" 
                            onChange={handleName} />
                </div>

                <div>
                    <label htmlFor="txt-hp">핸드폰(hp):</label>
                    <input id="txt-hp" type="text" name="" value={hp} placeholder="핸드폰"
                            onChange={handleHp} />
                </div>

                <div>
                    <label htmlFor="txt-company">회사(company):</label>
                    <input id="txt-company" type="text" name="" value={company} placeholder="회사" 
                            onChange={handleCompany}/>
                </div>

                <br/>
                <button type="submit">수정(전송)</button>
            </form>

            <br/><br/>
            <Link to="">리스트로 가기</Link>

        </>
    );
}

export default EditForm;
