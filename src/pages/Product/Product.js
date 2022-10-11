import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductName from "./ProductGrid";
import { useParams } from "react-router-dom";
import Collection from "../Collection/Collection";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "antd/dist/antd.css";
import ProImage from "./ProductGrid";
import { padding, style } from "@mui/system";
import { DatePicker, Space, Button, Modal, Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../../redux/actions";
import { useSelector } from "react-redux";


const Product = (props) => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(1);
  const { Panel } = Collapse;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cartBtn, setCartBtn] = useState("add to cart");
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const dispatch = useDispatch();
  const handleCart = (product) => {
      if (cartBtn === "add to cart") {
        dispatch(addItem(product));
        setCartBtn("remove from cart");
        
      } else {
        dispatch(delItem(product));
        setCartBtn("add to cart");
      }
  }


  const [period, setPeriod] = useState();
  const Change: DatePickerProps["onChange"] = (date, dateString) => {
    const [startDate, endDate] = dateString;
    const d1 = new Date(startDate);
    const d2 = new Date(endDate);
    const time = Math.abs(d2 - d1);
    setPeriod(Math.ceil(time / (1000 * 60 * 60 * 24)));
  };
  // const [isPriceChanged, setPriceChanged] = useState(false);

  const DateGrid = {
    borderTop: "solid 2px black",
    borderBottom: "solid 2px black",
    padding: "15px 0 10px 0",
    marginBottom: "30px",
  };

  const { RangePicker } = DatePicker;
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getProduct = () => {
      //   setLoading(true);
      fetch(
        "https://629da17a3dda090f3c065767.mockapi.io/cam/canon/" + params.id
      )
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);
  const location = {
    fontSize: "16px",
    backgroundColor: "#A0D5A5",
    maxWidth: "140px",
    paddingLeft: "10px",
  };
  const TotalPrice = [product.price, period, 1];
  useEffect(() => {
    const sum = TotalPrice.reduce((a, b) => a * b);
    setTotal(sum);
  });
  const state = useSelector((state) => state.addItem);
  const storedProduct = JSON.stringify(state)
  localStorage.setItem('product', storedProduct)
  let priceTag = {total};
  
  return (
    <>
      <div className="product-page">
        <Grid container rowSpacing={2} xs={12}>
          <Grid item md={7} xs={12}>
            <ProImage
              className="pro-img"
              image={product.image}
              image2={product.image2}
              image3={product.image3}
            />
          </Grid>
          <Grid item md={5}>
            <div className="product-info">
              <h1 className="product-name" style={{ marginBottom: "30px" }}>
                {product.name}
              </h1>
              <div className="available-in" style={{ marginBottom: "30px" }}>
                <p style={{ fontSize: "16px" }}>available in</p>
                <Grid container rowSpacing={1}>
                  <Grid item xs={6}>
                    <p style={location}> - &ensp; hanoi</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p style={location}> - &ensp; phu quoc</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p style={location}> - &ensp; sai gon</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p style={location}> - &ensp; da nang</p>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container columnSpacing={0} style={DateGrid}>
                  <Grid item xs={4.5} style={{ borderRight: "solid 2px" }}>
                    <h5
                      style={{
                        maxWidth: "150px",
                        paddingTop: "3px",
                      }}
                    >
                      Rental Dates
                    </h5>
                  </Grid>
                  <Grid item xs={7.5}>
                    <Space direction="vertical" size={6}>
                      <RangePicker
                        bordered={false}
                        style={{ verticalAlign: "center", color: "black" }}
                        allowEmpty={false}
                        onChange={Change}
                      />
                    </Space>
                    <div></div>
                  </Grid>
                </Grid>
              </div>
              <div className="price">
                <Grid
                  container
                  columnSpacing={-5}
                  style={{ marginBottom: "10px" }}
                >
                  <Grid item xs={6}>
                    <h3 style={{ fontSize: "3em" }}>
                      {" "}
                      ${ isNaN(`${total}`) ? product.price : `${total}`}
                    </h3>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="pick-n-deli"
                    style={{
                      paddingTop: "15px",
                      fontSize: "1rem",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={showModal}
                  >
                    Pickup or delivery
                  </Grid>
                  <Modal
                    title="Pickup/Delivery Options"
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={700}
                  >
                    <div>
                      <p style={{ color: "#E38E91" }}>FAST</p>
                      <h3>Ship It</h3>
                      <p style={{ color: "gray" }}>
                        We'll send it to an address or UPS location
                      </p>
                    </div>
                    <hr></hr>
                    <div>
                      <p style={{ color: "#E38E91" }}>FASTER</p>
                      <h3>Pickup</h3>
                      <p style={{ color: "gray" }}>
                        Grab your gear at a BL or partner location
                      </p>
                    </div>
                  </Modal>
                </Grid>
              </div>
              <div className="atc-button">
                <Grid container rowSpacing={{ xs: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      type="primary"
                      className="add-to-cart"
                      onClick={() => handleCart(product)}
                    >
                      {cartBtn}
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button className="checkout">checkout</Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <input style={{ visibility: "hidden" }} value={1} />
          </Grid>
        </Grid>
        <div className="info-accordion" style={{ marginBottom: "80px" }}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <PlusOutlined
                style={{ fontsize: "16px" }}
                rotate={isActive ? 90 : 0}
              />
            )}
            expandIconPosition={"end"}
            className="site-collapse-custom-collapse"
            style={{
              background: "none",
              marginTop: "9rem",
              borderTop: "solid 1px black",
            }}
          >
            <Panel
              header="/ &ensp; overview"
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>{product.overview}</p>
            </Panel>
            <Panel
              header="/ &ensp; specs"
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>{product.specs}</p>
            </Panel>
            <Panel
              header="/ &ensp; rental includes"
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>{product.specs}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Product;
