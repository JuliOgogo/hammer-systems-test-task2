import React, {Component} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/thunks/usersReducer";
import Loading from "../../../components/shared-components/Loading";

export class UserList extends Component {

    state = {
        users: this.props.users,
        userProfileVisible: false,
        selectedUser: null
    }

    componentDidMount() {
        this.props.getUsers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.users !== this.props.users) {
            this.setState({
                users: this.props.users
            })
        }
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    render() {

        const {users, userProfileVisible, selectedUser} = this.state;
        console.log(users)

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Username',
                dataIndex: 'username',
                sorter: {
                    compare: (a, b) => {
                        a = a.username.toLowerCase();
                        b = b.username.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: {
                    compare: (a, b) => {
                        a = a.phone.toLowerCase();
                        b = b.phone.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Website',
                dataIndex: 'website',
                sorter: {
                    compare: (a, b) => {
                        a = a.website.toLowerCase();
                        b = b.website.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="Edit profile">
                            <Button type="primary" className="mr-2" onClick={() => {
                                this.showUserProfile(elm)
                            }} size="small">Edit profile</Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined/>} onClick={() => {
                                this.deleteUser(elm.id)
                            }} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>

                {this.props.isFetching ? <Loading/> : null}

                <Table columns={tableColumns} dataSource={users} rowKey='id'/>

                {this.state.userProfileVisible ?
                    <EditProfile data={selectedUser} visible={userProfileVisible} close={() => {
                        this.closeUserProfile()
                    }}/> : null}

            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps, {getUsers})(UserList)
