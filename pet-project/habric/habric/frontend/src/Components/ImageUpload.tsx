import React, { useEffect } from 'react'

interface IProps {
  setImage: any;
}

export const ImageUpload: React.FC<IProps> = ({ setImage }) => {
  const [text, setText] = React.useState<string>('Загрузите изображение')
  // const [inOpload, setInOnload] = React.useState<string>('Загрузите изображение')
  const ref = React.useRef<HTMLInputElement>(null)

  function uploadHandler(event: any) {
    setImage(event.target.files[0])
    setText('Изображение: ' + event.target.files[0].name)
    putImage()
  }

  function showImage(src: any, target: any) {
    var fr = new FileReader();
    fr.onload = function () {
      target.src = fr.result;
    }
    fr.readAsDataURL(src.files[0]);
  }

  function putImage() {
    var src = document.getElementById("select_image");
    var target = document.getElementById("target");
    showImage(src, target);
  }

  return (
    <div className='w-80 flex h-14 flex-row items-center' onClick={() => ref?.current?.click()}>
      <div  className='w-20 h-14'>
        {text !== 'Загрузите изображение' ? <img className='w-20 h-16' id='target' src='' alt='preShowImageUpload' /> : ''}
      </div>
      <input id='select_image' ref={ref} type="file" style={{ display: 'none', cursor: 'pointer' }} accept='image/*' onChange={(e) => uploadHandler(e)} name='image' placeholder='Загрузите изображение' />
      <div className='h-14 overflow-auto w-56 scrollBar'>{text}</div>
    </div>
  )
}
