import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import className from "classnames/bind";
import styles from "./Category.module.scss";
import { useRecoilValue, useRecoilState } from "recoil";
import { userData } from "recoil/atom";
import { getCategoryApi, signupApi } from "apis/loginApi";

const Category: React.FC = () => {
    const cx = className.bind(styles);
    const navigate = useNavigate();

    type Test = { id : number, name : string}

    const [select, setelect] = useState<Test[]>([])
    const [animal, setAnimal] = useState([
        { id: 1, name: "강아지" },
        { id: 2, name: "고양이" },
        { id: 3, name: "댕댕이" },
        { id: 4, name: "하마" },
        { id: 5, name: "뮤" },
        { id: 6, name: "기린" },
        { id: 7, name: "라이츄" },
        { id: 8, name: "피카츄" },
        { id: 9, name: "파이리" },
    ]);
    const user = useRecoilValue(userData)

    //선택한거 추가하기
    const Plus = (animal : any) => {        
        setelect(select.concat(animal))
    }
    
    useEffect(() => {
        getCategoryApi();
    }, [])

    const example = {}

    return (
        <>
            <div className={cx('sort')}>
                <h1 className={cx('name')}>카테고리</h1>
            </div>
            <div className={cx('input_containar')}>
                <input className={cx('category_input')} placeholder="동물이름을 입력해주세요" />
                <button>검색</button>
            </div>
            <div className={cx('category_containar')}>
                {animal.map((animal) => {
                    return (
                        <div onClick={()=> {Plus(animal)}}
                            className={cx('category_box')} key={animal.id}>
                            <p>{animal.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className={cx('sort')}>
                <button onClick={() => { signupApi(example) }} className={cx('btn')}>선택 완료</button>
            </div>
        </>
    )
}

export default Category