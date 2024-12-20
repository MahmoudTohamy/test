/** @format */

import Container from "@/components/Common/Container/index";
import React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { GoPlus } from "react-icons/go";

export default function CurrencyAndPayments() {
  return (
    <div className={style.paymentAndCurrencyCont}>
      <Container>
        <div className={style.body}>
          <div>
            <Image
              src='/assets/payment.png'
              alt='makka'
              width={442}
              height={635}
            />{" "}
          </div>
          <div className={style.paymentBody}>
            <div className={style.title}>
              <Image
                src='/assets/makka.svg'
                alt='makka'
                width={30}
                height={30}
              />{" "}
              <h2>Saudi Arabia Information</h2>
            </div>
            <h3>Currency and Payments</h3>
            <p>
              Saudi Arabia’s national currency is the Saudi riyal (ر.س SAR),
              which is subdivided into 100 halala.{" "}
            </p>
            <div className={style.collapsCont}>
              <CollapsItem
                number='01'
                title='Currency Exchange'
                msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. Nulla pellentesque eget felis vitae congue.  Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. '
                isOpen={false}
              />
              <CollapsItem
                number='02'
                title='Send and receive money'
                msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. Nulla pellentesque eget felis vitae congue.  Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. '
                isOpen={false}
              />
              <CollapsItem
                number='03'
                title='Taxes'
                msg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. Nulla pellentesque eget felis vitae congue.  Curabitur iaculis egestas lacus, ac faucibus neque dapibus vitae. '
                isOpen={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const CollapsItem = ({
  number,
  title,
  msg,
  isOpen,
}: {
  number: string;
  title: string;
  msg: string;
  isOpen: boolean;
}) => {
  return (
    <div className={style.collapsItem}>
      <p className={style.number}>{number}</p>
      <p className={style.collapsTitle}>{title}</p>
      <p className={style.msg}></p>
      <div>
        <GoPlus size={26} />
      </div>
    </div>
  );
};
