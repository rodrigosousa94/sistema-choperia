"use client"
import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/dashboard/components/button'

export function Form(){

    const [image, setImage] = useState<File>()
    const [previewImage, setPreviewImage] = useState("")

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files[0]){
            const image = e.target.files[0]

            if(image.type !== "image/jpeg" && image.type !== "image/png"){
                console.log("Formato invalido")
                return
            }

            setImage(image)
            setPreviewImage(URL.createObjectURL(image))
        }
    }

    return(
        <main className={styles.container}>
            <h1>Novo Produto</h1>

            <form action="" className={styles.form}>
                <label className={styles.labelImage}>
                    <span>
                        <UploadCloud size={30} color='#fff'/>
                    </span>

                    <input type="file" accept='image/png, image/jpeg' required onChange={handleFile}/>
                    
                        {previewImage && (
                            <Image alt='imagem-preview' src={previewImage} className={styles.preview} fill={true} quality={100} priority={true}/>
                        )}        
                </label>    

                <select name="category">
                        <option key={1} value={1}>Pizzas</option>
                        <option key={2} value={2}>Bebidas</option>
                </select>

                <input className={styles.input} type="text" name='name' placeholder='Digite o nome do produto' required/>
                <input className={styles.input} type="text" name='price' placeholder='Digite o preço do produto' required/>
                <textarea className={styles.input} name='description' placeholder='Digite a descrição do produto' required></textarea>      
                 <Button name='Cadastrar Produto'/>
            </form>
        </main>
    )
}