import React, {Component} from 'react';
import portfoliostyle from './portfolio.module.css';

class Project extends Component{
    render(){
        return(<div className={portfoliostyle.wrap}>
            컴포넌트단위로 스타일연결함
        </div>)
    }

}

export default Project;