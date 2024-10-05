import { useState } from "react"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={formData.birth}
          onChange={handleChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="en">미국</option>
          <option value="uk">영국</option>
        </select>
        {formData.country}
      </div>

      <div>
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Register
