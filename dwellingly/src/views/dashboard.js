import React from 'react';
import dwellinglylogo from '../assets/images/dwellingly_logo_white.png';
import {MODULE_DATA, ACCESS_REQUEST_DATA} from '../components/DashboardModule/data';
import DashboardModule from '../components/DashboardModule';
import Collapsible from '../components/Collapsible';
import RequestItem from '../components/RequestItem';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddClick(id){
        console.log('add',id);
    }

    handleDeclineClick(id){
        console.log('decline',id);
    }

    render() {
        return (
            <div className="dashboard__container">
                <div className="dashboard__sidebar_container">
                    <div className="dashboard__sidebar_user_container">
                        <span className="icon dashboard__sidebar_user_icon">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="dashboard__sidebar_user_name">Raymond Holt</span>
                    </div>
                </div>
                <div className="dashboard__main_container">
                    <div className="dashboard__header">
                        <img className="dashboard__header_logo" src={dwellinglylogo} />
                    </div>
                    <div className="dashboard__main">
                        <h2 className="page-title">Admin Dashboard</h2>
                        <div className="dashboard__modules_container">
                            <DashboardModule
                                data={MODULE_DATA.openTickets}
                            />
                            <DashboardModule
                                data={MODULE_DATA.reports}
                            />
                            <DashboardModule
                                data={MODULE_DATA.managers}
                            />
                        </div>
                        <Collapsible
                            title="New Staff Assignments"
                            count="3"
                        >
                            <div className="collapsible__row columns">
                                <div className="collapsible__col column">Tenant Name</div>
                                <div className="collapsible__col column">
                                    Meerkat Manner<br />
                                    <span className="subtext">Property Manager Name</span>
                                </div>
                                <div className="dashboard__colapsible_col column">
                                    <div className="select is-rounded">
                                        <select>
                                            <option>Staff Name</option>
                                            <option>Staff Name 2</option>
                                            <option>Staff Name 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="collapsible__row columns">
                                <div className="collapsible__col column">Tenant Name</div>
                                <div className="collapsible__col column">
                                    Meerkat Manner<br />
                                    <span className="subtext">Property Manager Name</span>
                                </div>
                                <div className="dashboard__colapsible_col column">
                                    <div className="select is-rounded">
                                        <select>
                                            <option>Staff Name</option>
                                            <option>Staff Name 2</option>
                                            <option>Staff Name 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible
                            title="Request for Access"
                        >
                            {
                                ACCESS_REQUEST_DATA.map((requestItemData,index)=>{
                                    return (<RequestItem key={`requestItem--${index}`} data={requestItemData} onDeclineClick={this.handleDeclineClick} onAddClick={this.handleAddClick}/>);
                                })
                            }
                        </Collapsible>
                    </div>
                    <footer className="dashboard__footer">
                        <p className="dashboard__footer_logo_text">
                            <span className="bold">JOIN</span> 2018
                        </p>
                    </footer>
                </div>
            </div>
        )
    }
}