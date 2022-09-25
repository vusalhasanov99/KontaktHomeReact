import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='foot1'>
                <div className='content1 m-5'>
                    <h5>Məlumat</h5>
                    <ul>
                        <li><a href=''> Tez-tez verilən suallar</a></li>
                        <li><a href=''>Saytın istifadə şərtləri</a></li>
                        <li> <a href=''>Kontakt TV</a></li>
                    </ul>

                </div>
                <div className='content2 m-5'>
                    <h5>Şirkətlər</h5>
                    <ul>
                        <li><a href=''> Şirkət haqqında</a></li>
                        <li><a href=''>Şirkətin xəbərləri</a></li>
                        <li><a href=''>Mağazalarımız</a></li>
                        <li> <a href=''>Xidmətlər</a></li>
                        <li><a href=''>Vakansiyalar </a></li>
                        <li><a href=''>Konfidensiallıq siyasəti</a></li>
                    </ul>
                </div>
                <div className='content3 m-5'>
                    <h5>Müştərilər üçün</h5>

                    <ul>
                        <li><a href=''>Çatdırıma və ödəniş</a></li>
                        <li><a href=''>Geri qaytarma siyasəti</a></li>
                        <li><a href=''>Zəmanət</a></li>
                        <li><a href=''>Hissə-hissə ödənişinə dair tələblər</a></li>
                        <li><a href=''>Aylıq ödənişlərin həyata keçirilməsi üsülları</a></li>
                        <li><a href=''>Aylıq ödənişlərin üsulları</a></li>

                    </ul>
                </div>
                <div className='content4 m-5 '>
                    <h5>Əlaqə</h5>
                    <ul>
                        <li><a href=''> *6060</a></li>
                        <li><a href=''>Biz xəritədə</a></li>
                    </ul>

                </div>

            </div>

            <div className='foot2'>
                <div>
                    <h2>Abunə olun:</h2>
                    <input placeholder="E-mail" type="email" autocomplete="off" value=""></input>
                    <button className="" type="submit"><span>Abunə olmaq</span></button>
                </div>
                <div className='sosial'>
                    <h3>Biz sosial şəbəkələrdə:</h3>
                    <a href='https://www.facebook.com/Kontakthome'><img style={{ width: "25px" }} src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png'></img></a>
                    <a href='https://www.instagram.com/Kontakthome'><img style={{ width: "25px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'></img></a>
                    <a href='https://t.me/kontakt_az'><img style={{ width: "25px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'></img></a>


                </div>
            </div>
        </div>
    )
}

export default Footer
