import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcolapse" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                            {/* <a className="navbar-brand" href="#">
                            <img src="">
                            </a> */}
                        </div>
                        <div className="collapse navbar-collapse" id="navcolapse">
                            <ul className="nav navbar-nav navbar-right">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/cars" activeClassName="active">Cars</Link></li>
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main

// <nav className="navbar navbar-default">
//     <div className="container-fluid">
//         <div className="navbar-header">
//             <a className="navbar-brand" href="#">Scotch Cars</a>
//         </div>
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//             <ul className="nav navbar-nav navbar-right">
//                 {/* Change from a to Link */}
//                 <li><Link to="/" activeClassName="active">Home</Link></li>
//                 <li><Link to="/cars" activeClassName="active">Cars</Link></li>
//                 <li><Link to="/about" activeClassName="active">About</Link></li>
//             </ul>
//         </div>
//     </div>
// </nav>
