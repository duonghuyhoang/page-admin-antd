/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post-Management.css";
import { Input, Space, Select, Table, Pagination, Modal } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import { DarkModeContext } from "../../App";
import { useContext } from "react";

function PostManagement() {
  const { darkMode } = useContext(DarkModeContext);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { Option } = Select;
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      setFilteredPosts(response.data);
    });
  }, []);

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterText(value);
    if (value === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.includes(value) || post.userId.toString() === value
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      className: "lable-id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
      className: "lable-user",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "lable-title",
    },
    {
      title: "Action",
      key: "action",
      className: "lable-action",
      render: (text, record) => (
        <button
          className={`btn-view ${darkMode ? "btn-view-dark" : ""} `}
          onClick={() => handleViewPost(record)}
        >
          <EyeOutlined />
        </button>
      ),
    },
  ];

  return (
    <div className={`wrapper-posts ${darkMode ? "wrapper-posts-dark" : ""} `}>
      <div className={`title-posts ${darkMode ? "title-posts-dark" : ""} `}>
        User Management
      </div>
      <div className='demo-filter'>
        <Space>
          <Input
            className={`filter ${darkMode ? "filter-dark" : ""} `}
            placeholder='Filter by User ID or Title'
            value={filterText}
            onChange={handleFilterChange}
            prefix={
              <SearchOutlined
                style={{ marginLeft: "-20px" }}
                className='icon-search'
              />
            }
          />
          <Select
            defaultValue='Date range'
            className={`demo-btn-management1 ${
              darkMode ? "demo-btn-management-dark" : ""
            } `}
          >
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2</Option>
            <Option value='Option 3'>Option 3</Option>
          </Select>

          <Select
            defaultValue='Status'
            className={`demo-btn-management2 ${
              darkMode ? "demo-btn-management-dark" : ""
            } `}
          >
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2</Option>
            <Option value='Option 3'>Option 3</Option>
          </Select>

          <Select
            defaultValue='Department'
            className={`demo-btn-management3 ${
              darkMode ? "demo-btn-management-dark" : ""
            } `}
          >
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2</Option>
            <Option value='Option 3'>Option 3</Option>
          </Select>

          <Select
            defaultValue='Saved filters (0)'
            className={`demo-btn-management4 ${
              darkMode ? "demo-btn-management-dark" : ""
            } `}
          >
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2 </Option>
            <Option value='Option 3'>Option 3</Option>
          </Select>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={currentPosts}
        className={`table-posts ${darkMode ? "table-posts-dark" : ""} `}
        pagination={false}
      />
      <Pagination
        className={`pagination ${darkMode ? "pagination-dark" : ""} `}
        current={currentPage}
        total={pageNumbers.length * 10}
        onChange={(page) => setCurrentPage(page)}
      />
      <Modal
        title='Post Details'
        open={!!selectedPost}
        className={`post-details ${darkMode ? "post-details-dark" : ""} `}
        onCancel={handleClosePost}
        footer={[
          <button
            key='close'
            className={`close-details ${darkMode ? "close-details-dark" : ""} `}
            onClick={handleClosePost}
          >
            Close
          </button>,
        ]}
      >
        {selectedPost && (
          <>
            <p
              className={`userid-details ${
                darkMode ? "userid-details-dark" : ""
              } `}
            >
              User ID: {selectedPost.userId}
            </p>
            <p
              className={`title-details ${
                darkMode ? "title-details-dark" : ""
              } `}
            >
              Title: {selectedPost.title}
            </p>
            <p
              className={`body-details ${darkMode ? "body-details-dark" : ""} `}
            >
              Body: {selectedPost.body}
            </p>
          </>
        )}
      </Modal>
    </div>
  );
}

export default PostManagement;
