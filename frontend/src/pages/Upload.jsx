import axios from "axios";
import { useEffect, useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [videos, setVideos] = useState([]);

  const uploadVideo = async () => {
    const formData = new FormData();
    formData.append("video", file);

    await axios.post("http://localhost:5000/api/videos/upload", formData);
    loadVideos();
  };

  const loadVideos = async () => {
    const res = await axios.get("http://localhost:5000/api/videos");
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadVideo}>Upload</button>

      <h3>Uploaded Videos</h3>
      {videos.map(v => (
        <div key={v._id}>
          {v.filename} - {v.status}
          <br />
          <video width="300" controls src={`http://localhost:5000/uploads/${v.filename}`} />
        </div>
      ))}
    </div>
  );
}
