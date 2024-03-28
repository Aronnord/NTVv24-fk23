'use client'
import Image from "next/image";
import { useState, Fragment, useCallback } from "react"
import aron from './me.jpeg'


const DATA = [
  {
    id: 0,
    title: 'Olís',
    subTitle: 'Mars 2018 - ',
    description: 'Vaktstjóri á bensínstöð, áður kokkur á grillinu og á undan því var ég útimaður.'

  },
  {
    id: 1,
    title: 'Örfirisey RE-4',
    subTitle: 'Október 2008 - Maí 2009',
    description: 'Messa gutti. Sá um að aðstoða kokkinn við eldamennskuna, uppvask og þrif í eldhúsinu um borð og matsal.'

  },
  {
    id: 2,
    title: 'Bónus',
    subTitle: 'September 2004 - September 2005',
    description: 'Kassa starfsmaður.'

  },
]

type JobProps = {
  title: string;
  subTitle: string;
  description: string;
}

const Job = (props: JobProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <p>{props.description}</p>
    </div>
  );
}

type HeaderProps = {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Image src={aron} alt="Profile Picture" width={200} height={100} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} />
      <h1>{name}</h1>
      <hr style={{ borderColor: "blue", marginTop: "20px", marginBottom: "20px" }} />
    </div>
  );
}

interface ContentProps {
  data: typeof DATA
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.data.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <h3>{item.subTitle}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

const FunFacts = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Fun Facts</h2>
      <p>Fun fact 1: I have over 50 Gundam models</p>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Header name="Aron Örn Jónsson" />
        <Content data={DATA} />
        <FunFacts />
      </div>
    </div>
  );
}
