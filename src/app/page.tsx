"use client"
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState('');
  const [replaceDomain, setReplaceDomain] = useState('');
  const [result, setResult] = useState('');
  useEffect(() => {
    setReplaceDomain(localStorage.getItem('replacePath') ?? '')
  }, [])

  return (
    <main className=" h-screen w-screen bg-base-100 flex items-center justify-center">
      <div className="w-96 -mt-64 flex flex-col gap-4">
        <h1 className=" text-xl text-base-content font-bold">替换域名</h1>
        <div>
          <div className=" label">
            <span className=" label-text">原链接</span>
          </div>
          <input type="text" value={text} onChange={e => setText(e.target.value)} className=' input-bordered input w-full' />
        </div>
        <div>
          <div className=" label">
            <span className=" label-text">替换域名</span>
          </div>
          <input type="text" value={replaceDomain} onChange={e => setReplaceDomain(e.target.value)} className=' input input-bordered w-full' />
        </div>
        <button className=' btn btn-outline btn-primary mt-4' onClick={() => {
          const url = new URL(text)
          const result = text.replace(url.origin, replaceDomain)
          setResult(result)
        }}>转换</button>
        {result && <div className=" flex items-center gap-2">
          <div className=" flex text-base-content">
            <span className="block w-12 flex-1">结果：</span>
            <a className=" link inline-block w-72 truncate" href={result} target="_blank">{result}</a>
          </div>
          <button className="btn btn-ghost btn-sm text-base-content " onClick={() => {
            navigator.clipboard.writeText(result)
          }}>
            <FaCopy />
          </button>
        </div>}
      </div>
    </main >
  )
}
