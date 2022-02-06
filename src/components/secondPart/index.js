import React from "react";
import { FaCity } from "react-icons/fa";
import { BiBookAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import "../../App.css";
import {
  ButtonRegLog,
  Container2,
  Container3,
  ContainerLeft,
  ContainerRight,
  ForCompon,
  GreenSpot,
  GreenSpot1,
  GreenSpot2,
  Headinng1,
  Headinng2,
  Headinnng1,
  InputSubsc,
  MiniContainer1,
  MiniContainer2,
  NumbersOf,
  Paragr,
  TitleOf,
  TitleOfBi,
  Foooter,
  FourCompon,
  CopyRight,
} from "./SecondPart-elements";

function SecondPart() {
  return (
    <div>
      <GreenSpot>
        <MiniContainer1>
          <ForCompon>
            <div className="AdjustCenter">
              <IoRestaurant className="iconOne" />
            </div>
            <div className="AdjustCenter">
              <NumbersOf> 465 </NumbersOf>
              <TitleOf> Best Restaurants </TitleOf>
            </div>
          </ForCompon>
          <ForCompon>
            <div className="AdjustCenter">
              <BiBookAlt className="iconTwo" />
            </div>
            <div className="AdjustCenter">
              <NumbersOf> 775 </NumbersOf>
              <TitleOf> Reservations </TitleOf>
            </div>
          </ForCompon>
          <ForCompon>
            <div className="AdjustCenter">
              <BsFillPersonFill className="iconThree" />
            </div>
            <div className="AdjustCenter">
              <NumbersOf> 825 </NumbersOf>
              <TitleOf> Clients </TitleOf>
            </div>
          </ForCompon>
          <ForCompon>
            <div className="AdjustCenter">
              <FaCity className="iconFour" />
            </div>
            <div className="AdjustCenter">
              <NumbersOf> 27 </NumbersOf>
              <TitleOf> Cities </TitleOf>
            </div>
          </ForCompon>
        </MiniContainer1>
      </GreenSpot>
      <div>
        <Container2 className="">
          <TitleOfBi> Are you a restaurant owner? </TitleOfBi>
          <MiniContainer2 className="rest-owner p-5 ">
            <ContainerLeft>
              <img
                src="./RegisterImage.svg"
                alt=""
                className="register-img"
              ></img>
            </ContainerLeft>
            <ContainerRight>
              <Headinng1> Register Now </Headinng1>
              <Paragr>
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </Paragr>
              <ButtonRegLog> Register </ButtonRegLog>

              <Headinng1> Already have account? </Headinng1>
              <Paragr>
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </Paragr>
              <ButtonRegLog> Login </ButtonRegLog>
            </ContainerRight>
          </MiniContainer2>
        </Container2>
      </div>
      <GreenSpot1>
        <Container3>
          <div className="GrTo">
            <Headinnng1> Get notification from us Every update! </Headinnng1>
            <Headinng2> Subscribe Get all notification from us </Headinng2>
          </div>
          <div className="GrTo">
            <div className="subBac">
              <InputSubsc placeholder=" Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </Container3>
      </GreenSpot1>

      <GreenSpot2></GreenSpot2>

      <Foooter>
        <FourCompon>
          <img src="/logo.png" className="logo" alt="tabla.ma" width="54px" />
          <h3 class="green"> tabla.ma</h3>
          <p className="footerParag">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <h5>Email: support@tabla.ma</h5>
          <h5> Phone: +212 (558) 547 4758 </h5>
        </FourCompon>
        <FourCompon>
          <h4 className="quickLinks"> Quick Links</h4>
          <div className="qlListe">
            <h5>
              <a href="url">Home</a>
            </h5>
            <h5>
              <a href="url">Restaurants</a>
            </h5>
            <h5>
              <a href="url">Foods</a>
            </h5>
            <h5>
              <a href="url">Register your restaurant</a>
            </h5>
            <h5>
              <a href="url">Create an account</a>
            </h5>
          </div>
        </FourCompon>
        <FourCompon>
          <h4 className="quickLinks"> Navigations </h4>
          <div className="qlListe">
            <h5>
              <a href="url">Home</a>
            </h5>
            <h5>
              <a href="url">About us</a>
            </h5>
            <h5>
              <a href="url">Terms & Conditions</a>
            </h5>
            <h5>
              <a href="url">Privacy Policy</a>
            </h5>
          </div>
        </FourCompon>
        <FourCompon>
          <h4 className="quickLinks"> Support </h4>
          <div className="qlListe">
            <h5>
              <a href="url">Contact us</a>
            </h5>
            <h5>
              <a href="url">FAQ</a>
            </h5>
          </div>
        </FourCompon>
      </Foooter>
      <CopyRight>
        All rights reserved by <span className="footerTabla">TABLA.MA</span> |
        2022©
      </CopyRight>
    </div>
  );
}

export default SecondPart;
