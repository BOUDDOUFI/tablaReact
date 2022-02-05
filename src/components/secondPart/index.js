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
        <Container2>
          <TitleOfBi> Are you a restaurant owner? </TitleOfBi>
          <MiniContainer2>
            <ContainerLeft className="yih">
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
            <InputSubsc placeholder=" Enter your email" />
          </div>
        </Container3>
      </GreenSpot1>

      <GreenSpot2></GreenSpot2>

      <Foooter>
        <FourCompon>
          <img src="/logo.png" className="logo" alt="tabla.ma" width="54px" />
          <h3 class="green"> tabla.ma</h3>
          <p>
            It is a long established fact that a reader will
            {/* <br> be distracted by the readable content of a</br> page when */}
            looking at its layout.
          </p>
        </FourCompon>
        <FourCompon> sdv</FourCompon>
        <FourCompon> SDGV </FourCompon>
        <FourCompon>adehgeh</FourCompon>
      </Foooter>
    </div>
  );
}

export default SecondPart;
