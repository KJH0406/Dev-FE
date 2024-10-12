"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import styles from "@/styles/share/image-picker.module.css"

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef()
  const [pickImage, setPickImage] = useState()

  const handlePickClick = () => {
    imageInputRef.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      if (!pickImage) {
        setPickImage(null)
      }
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.control}>
        <div className={styles.preview}>
          {!pickImage && <p>사진을 선택해주세요!</p>}
          {pickImage && <Image src={pickImage} fill />}
        </div>
        <input
          ref={imageInputRef}
          onChange={handleImageChange}
          className={styles.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          이미지 선택
        </button>
      </div>
    </div>
  )
}

export default ImagePicker
