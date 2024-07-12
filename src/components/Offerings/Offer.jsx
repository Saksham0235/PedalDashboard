import React from 'react'
import './offer.css'
import { ImCross } from "react-icons/im";

const Offer = () => {
    return (
        <div className='offer'>
            <h2 className='o-h2'>Offerings</h2>

            <div className="boxes">
                <div className="ulane">
                    <div className="box1">
                        <div className="upper">
                            <h6 className='ou-h6'>24/7 Access</h6>
                            <p className='ou-para'>
                                Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/a09c/d453/babf403bb752c39d744dc3d892330f5d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2g1UydP-fU-ThMXcvyDmjqIF1kNxIhBDKJci82ruDFT~KDxS4Lez6GhMBkn8zH4VwRbdhHO1agBVdAjaiIsNE14rU~zEgaYK7IzYdqsnCBlh6y6hgzRJWhkexEE1fm1uJM0rY1B-voGNpKPytjhNqp6yjag8ax6D37PoYJTjQ2EIcq7~rQ9RLoTKu5DiIRq9Whpvcj9OPR0ONuN0~91XPPCVlpvcc~9jmwPwqXynep5QFGHBmvylFVc6KfIFc7--FZHFbh8ZbYt9GHGle9D298bEqhn88s7Y1SqcXGetcuCPTCOd8ZkFeG3S7Aeyy~BwiJ7XZRzH3SSHQj2JAgZ0g__' alt='photo' />
                        </div>
                    </div>


                    <div className="box1">
                        <div className="upper1">
                            <h6 className='ou1-h6'>Expert Mentorship</h6>
                            <p className='ou1-para'>
                                Connect with former mentors and founders and domain experts who offer valuable guidance and insights curated to your start-up journey, helping you navigate challenges and seize opportunities effectively.
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/f70a/bcdf/468557494dd64408491dd380217a4a13?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=al6-hValx2gfUEymXTSlLTXnK5ZSHO3brKvCd3Ijrbu3JJSMfeQhXi3zpeMFFc4tQcXtR4~b6e2SuShErT-PcZKov2JbHdc9~MiWHKFHann0BF7AebYFYf-yuz-9vWdBxaDwABjhsVz~8HZR5s1TlR25IGmAIer5uWmJYYybe1cbz8bU7tbQSHVccs6obWGzhC19wFXi2q9ecm9-IdFN9K3lJGWFeqV7-ht3ZkIQ-6UKWMPGUahCRihuNtiy2zp14JKbhBOynFCHibqFMsa0mhaVVP4sHYqOQ~dxZGecTDzWdcH3loqSTZ18TlhBQBYCG~jQMO3o7vnGmIJ21qnLIA__' alt='photo' />
                        </div>
                    </div>


                    <div className="box1">
                        <div className="upper">
                            <h6 className='ou-h6'>Team Building</h6>
                            <p className='ou-para'>
                                Find potential partners within the cohort, building a strong team for collaborations and partnerships that can elevate your ideas
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/7646/a6fa/ccfa64ea38888c2b9e973169d7129462?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4nB1XsWIo5tYrOoNDFzCnUQHasSQ6qA3F62AGPGHZghmwR2gm~hfCXU1OjmKq9448xrLV2W02p3h~IkjvwT2HqIVulNNsTKtgpsuXxJ-yXN8IS7kynqKiY4rx9wxrlI2K8Y7rlRGS5ri3Mypd-FuYkhxsk15Y-MBOsET5ZPYQzfYGWRISCEQGHDE4QnjFbAgLTn4axu~CAlXwN~tL~rT~oNfE2dOzo9k1leKcj4fyzSm~PiRYZlY36nSXblCn6rjPYdLCAfUO77hBhJUkXqsijJM1DVLwd7I8TSwuQXqixiopP88RI-ZNhcQ-IAx00wjl1KDFwNEC6Jitmy5~lSxA__' alt='photo' />
                        </div>
                    </div>

                </div>
                <div className="dlane">
                    <div className="box1">
                        <div className="upper">
                            <h6 className='ou-h6'>Founder Ecosystem</h6>
                            <p className='ou-para'>
                                Join the ecosystem of fellow founders, creating opportunities for collaboration, knowledge sharing, and collective growth, as you learn from each other's experiences and perspectives.
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/cf5c/ad44/6c7e9998aae997157c877b1b61e4dbad?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBkyWamp6xnbiBKZ4-IOwSh18SByle3L6H61zCQ~fiIVyUaaNPP9RyYe2kjuu7M4Q6MiXErNdg89wwO-xF-4tSkIoHSkvM2gYSJiBchAQj34RNNwUuI5ks5z77Muxk1F2iy9PRCT1yxF24Qat9fgNGYEJcZG3Cbsdcp3cqVW1TfO9~GVMdxsGWkRb--8Ce4LQX8WMG0oIJz-ld2u2ZUtfx7r9OFGdLY-rE0OGekFnd~lz0TQPAY2dNCTDIBQTl01RdVURaPBVjzfMY7tqdB5UOFFcaWtmsitKRRcmwaZSBi5~~09ezP6BNEWgB0E9kBOZKcqUewTegPrG659fV20Kw__' alt='photo' />
                        </div>
                    </div>

                    <div className="box1">
                        <div className="upper">
                            <h6 className='ou-h6'>Investor Networking</h6>
                            <p className='ou-para'>
                                Engage with a diverse range of investors, from venture capitalists to angel investors, gaining insights into their investment criteria and thought processes. This interaction will help define initial metrics and refining the pitch
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/0421/8f72/b331390c2f97db39f42d41170fd7e96d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oee6Wwuzt149cpPFVsZAWWbGiCsDUPdlKL8Em6s2jtdWVazSwiMEHKswh9~bw5PRyxtMzuXBTZZ1FZH2EVR1-ozkmXm-ydKS8uPhp-VANtT4OOW4941F~UkjiFlsVx-nu83E-epG~l7rYCt1S7YXc2mARypBBkQkAR-PaogRfiaXHynBhQ7mUhEaqpI9U5i0jihWqMjftdfaLORnizz5w1p28N4cBIIbzUcCfqWQdwfJViOcs0Udqh4~3JOWXMznml0QGAT08l7~-5tV4EAWL9lx4J0bT0fiDAEPlm3pAGlvGIuYYGeoIAWUHT6fh-4TYJEDA9LvzFY8Du6V96TJxA__' alt='photo' />
                        </div>
                    </div>

                    <div className="box1">
                        <div className="upper">
                            <h6 className='ou-h6'>Access to Funding</h6>
                            <p className='ou-para'>
                                Opportunity to secure pre-seed/seed investments of up to $250,000 from the PedalStart network
                            </p>
                        </div>
                        <div className="bottom">
                            <img className='ob-img' src='https://s3-alpha-sig.figma.com/img/ef97/3899/8e290eb524eec4a279dd1ed1a0395058?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nckJM2fgeQVCHTyHTNvF4sAjqmrhqopDhEJr2nJxokZIziFNtmkBUVuuEzwLi5JwDWiQPXtTky-njhDrGBpoHT8mpeY5bnkziGvrzX1p2B-NmxggbAW1~jorRaqvm8sxZ~nTO~rp1pAhyCigY2dLSHGzp7VhKdtbU45Q7ogsZ5TQOHR~dJZiXlvsbSnrcJTGceOzVwqE3tF9uw0R2L8t-Ur3p3tqXMh3tPEzLyrm741~z5AdNas3xQfze14-TNrQoFrsJgb9ecGa8rm~MmtVt1YmstLNfVrxxprkCvzIyjFNm0HKhrNQcJV1Nu9U5cmo0Yx1r40YOm3P70yTGl3BMA__' alt='photo' />
                        </div>
                    </div>
                </div>

            </div>
            <div className="brands">
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/31e8/e6a9/362ab34acd035778f707f35dddecb39e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVlRK5tjXsvf5rLQmKKoF7AH6CVd0QaSho5-N133ffKfcqSsEisSp6~QYS9dJ6f4SKPFuQZiKU58KiLVJOl7D6UIlEawkxj3Zx9BivDuQcGutMTdgpmbNlOTwcxSMx4Zk~vnUFXqbyD9E0vIm~49IkZyLbplP2O2hXiGKOgienyFLRf8hyZ94MXFaoQjIZU2M2FU2Hk5VXLWbYyFgDsyXVfHCz0ig20RNple9s07vs3zubWRFGL~4D6S6Hl~r7fnPT6t6uBez9naHOu480qWvder-Lma09orZiTtM-DKIgmTE256O-7Ualo90mMQvdcWh8wo1aR5kjebioyApkLyCQ__' alt='brand1' />
                <img className='brand-image' src='https://s3-alpha-sig.figma.com/img/1d9c/34a4/b6967f3d4fbac763630322ce60356c82?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOKJ49s66DlQ7SSiqQHEykEA~vXalrToKr3y8c3Hij4RmjBLbpAs5UI3S6EJ9hRqrVSb43UVFBFGjGbBLDZf8ffGUXl2THJ1D9I6YiiTjft6hwxUPaID~UGWHntgtZAZEnlRIi6yDw2pmqGrYsIDimSlcE9rH3jcrwpuME2KRXNWpiNGd-BjxAjGNF~6cmsK0ptXilThH~8Yffj9pJhPeLygd8yx3UmUp0HzY131VAFReYEogmP~v81JPYFJgj2M1fdLd~4OMvdm1A5XCAIhuKfYzV4rosqlcX1ReGMjE88es2~lBKwkWSZid4IJb2O5zQKyCM8R0rzeNfn-Z9Hfcw__' alt='brand2' />
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/24e3/9aa0/0999495b40c633e3229a2b09d5062285?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jNUpxdREhxpyxhhlcbYQKiv1du6HjX8A3MfCs9yRD-Yf6jr4FnZK7GzIV5bDwBW4aD4zPLu4Ph-YLPyDaJbQXR-N7jwUD0ShzJaSvmp25kSS9ZbGuNi4kYuIW2JazZGwuyf6wSEF38xFu7YH31thXZkonl0w~JZBFPQaIXlPOno1LNXPaVipcjcLEZMgiNU-k0-aqTO0uCH9oLtovHSU4BYd3MqvFuzZ1rPz4Yg9l4id6o39FwJ-y~Fidq0UM6DqhgKkiVb1PD9RQD10JpRKxouahHWmx~fBCDVipw5HUEDMNrxPn6B6JuMd1ozGXha5wVisReBoDYJVcUZQAXc0iQ__' alt='brand3' />
                <img className='brand-image2' src='https://s3-alpha-sig.figma.com/img/2e3d/aad0/e91238992bceafad28f4706869bba1e9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HV5Ditvq87XMJ3pdIC0WufRKIlS~lglV-KhJYekSFotpql9Ryji8vTQuO~EwhYa~Fw1AAryeyEHVN1~SKUsj~8IEGaSGR4xSG05JTYSWexhjK3rJ1d3qXbmQGi1Sx9loHN8FV~6XoXNcln21ZdBHpIa9~UtkufkkurTWSc0u9g2o8UvgNsjZiOHRWlAM-f-ICu3pAvjdf8oWu7TaQuYeAS9vGq8NvTRgsnGSePSvaiGrCun43mUkRoT2RoP0PAYgHIXwUtyZ-iZ4aurXR-HdQiBHCDk5dkQR7h-N3utbyjQAVgUq9O-6HBiO1llUKxD0gbFnNPjKKFNpXPriO4heHg__' alt='brand4' />
                <img className='brand-image1' src='https://s3-alpha-sig.figma.com/img/97f3/5415/f0a618458fffa780c8b297b04b2a0503?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FG0QfECfRFTJoMJx49JgWdZ6xOUPcl-SNuQ~3b4Z9fWI9DXp4gi-vgR-oj8W6gvZlfHWvanNjr6Gs70dwK5BLMRK~CYlXlH4mSBsO1r5PHNjgotFtjn8i-r9FLuWEHKP78bSiXsHK3G2~wPHH0BMll3zvZ-UdpD1KCoyLCby9JdkCosR5vh4CFBiDAnmRvVJOiAqLqXLdIvERJ9U3bu~PKPt2CzcZS-5apz7H4Qd7OU9dO5~szVQsNE136xKouEVPiNqZZIanCqz2Q37DVxrm837I2T-RPs9nX5fV8tAjwBHLQCtrLaCzBjLnBLjPcTG~wSXIuBuJ~OQmhc1QX98tQ__' alt='brand4' />
            </div>
            <div className="selection">
                <div className="o-left">
                    <div className="o-up">
                        <h5 style={{ fontSize: '3rem' }}>who  are we <br /><span style={{ backgroundColor: 'rgb(0,254,254)' }}>selecting?</span>    </h5>
                    </div>
                    <div className="o-bottom">
                        <div className="o-div1">
                            <ImCross />
                            <span className='o-span'>Passionate executors</span>
                        </div>
                        <div className="o-div1">
                            <ImCross />
                            <span className='o-span'>Domain Agnostic</span>
                        </div>
                        <div className="o-div1">
                            <ImCross />
                            <span className='o-span' >Early Stage</span>
                        </div>
                        <div className="o-div1">
                            <ImCross />
                            <span className='o-span'>Lorem</span>
                        </div>


                    </div>
                </div>
                <div className="o-right">
                    <img className='bottomimg' src='https://s3-alpha-sig.figma.com/img/cd96/0e9c/e5430d21cb350ab20c04fc3a8831b463?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fho~VRSV5ih22VKutdLdJs~nMnUxqyczFvlDqOcjeH4ldHjswaJJtwk83BBPMaRkvHQ6z~cMpGChf6zAOLygiA5tnUD1KCXH861xIzlUgF4ckbSGPU4GINp4E-bvzFPFftc2fhlxT4aWs7ow1L7wYkcr-CdfY5f7kjn48GeaYcDbYvYWUdUzwsywJF7NdM93HlGJH2UNZUza5MAgb1ebicg9SyAGjop5-FSNO7ULDk9CraiaPS7sU3SJxKR0ivuQ3WtL8T3tpyyJyx9DvDCvc7PzoCj0FUWbSsN1paCrZeBS-JNndCv8bF8enjIzp-naVIsCnMMUaVNWkvQLNZ-dhQ__' alt='selection' />
                </div>
            </div>

            <div className="mentors">
                <h4 className='o-h4'>
                    We're backed by incredible <br /> <span className='o-span1'>mentors </span>&<span className='o-span1'> investors</span>
                </h4>
                <div className="m-box">
                    <div className="m-lane1">
                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/c093/e13d/9081d4b010c3409255ea800d40bdc8f8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8I5tDTvlodokvoL0gJueUYAE0H0vjlXb8nfHWfK0U8gO4QsTR~1WxHEenXc4TyhxhLaBPgmAG1VLVDtuO~3sER9Fca8Sa04lI~X-X4arlv-mjg6DO4u9RDs~DYkdnpFZacly~Fbewv-RpdJn0s87sHoXRAsjNwf4-fSJ-GYaLc70fX9zC9gpAbklSQAf3SYz85rjUM7niFdbV3hyhLh-dPK-2XjL~0ah8BbGt3w5BGGJ0KAzbROfT3ww3nfOYK60RgjCNHeUTqGbJssaA~KRi98-aZ7Y3cXlfQEMXFbTf14F0-D9iSkIV1TOnPat9C21uGzU~o0-r1ON6HiaIbf3g__' alt='mentor1' />
                            <h6 >Vikas Lakhani</h6>
                            <p className='m-para'>Instaoffice</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/2964/ec6c/9b8b3759d17b80fae4af63184d6eb3af?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uvn0e1jm8c2Hyvc3H0D1FMYMSJqSu~mA39KaCDXwafnrmpH4c1y2adK5nSc3LKS9bFBaXmpXcXJOiL1NqgPJ4seuBxOiHf2QVKrvS3EGPUYZzuD8BPKnrOLb-bjvCKpdyyzkrrBF8nIF4Z6koko49XI4tP51n9lsCDkqfg2cC6f3Swer9s8MF-RGJ2bekzNvFtHtRaieiRZNMR5Vz3CrQKC9aMtOFtypY06J4XjnqGwNGVecwjhFKxLn7dQoG5RXt2EwdiQHI9G18quywVQ-3tFDltc~RB-KNU5XMO6GRsDa3RCydsZN0PJ23LJiGF57j0OLZGk-976iowMgYsGPOQ__' alt='mentor1' />
                            <h6 >Alok Kohli </h6>
                            <p className='m-para'>Pepsico</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/0fa2/5e87/4c7749f7e588c40c4fa8b06e90815494?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lvD4BHb9bTVF-xbRIT-AK6jOSjvU69FiweMUfohLraDal2DSMZ1vzgDtTp1nYfesM18aobBTAnEJoUeEQ1NU2FxvSYF8pzAY33NFEqXavWC-ajvb-rTTRY1Yj3WFtaXGmJZ2Dm9t4o19rxDxwFjngIhnfXPtYudLS~D30i-okiuh8DUWmaAcUGD6LBTP-BnLGR8ut6Gw8qgtvyRs~k1u34HvHfpGfa1rZeifCiVNtsPJwfsbJ9P6ptpkhoGDHJuGfB5ECsetDzgJwS-mSoospuKO3lO5vBrVgzUwENXxF79EGxpTrW2U1qgztKIjrzRgih0Ae-qicHoWkt~hcCi5HA__' alt='mentor1' />
                            <h6 >M Ramakrishnan </h6>
                            <p className='m-para'>Investor</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/0ef0/9818/5b9cbbd1c99523f6212e86e165727eb6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMzwj1lzlUH~tHi8YEaXQdfxozfuRJjGfh3hTO-rDMoPZSVVCtgKFHl2BflU6TC7~TSbYg0lsunV7qqQFzVK0Qvl9nSALcLIxmAwvuhTFKUKZ2E-6sm9Wmifa17tFYeCu11gjZbrTXPt1el~3E0Bjji0CnCl0Etm8c27RrP3Fvn5x6OEF0uZqg2PZ5N0V3Mx0eHCBMT-hLajbGQOcd6b~JG5i-v3aWnEJkLYI~7xmTOh0V8rQN5v38yKvWDkaK0WcDBZJEF8VekNoLCFKL30JpD8QqoBJP5BVDMvfGW6x8jVG19yfpxEtJjFwlWsatQK9y6vTtIiocE7GKf6PLKjZw__' alt='mentor1' />
                            <h6 >Sandeep Nailwal </h6>
                            <p className='m-para'>Polygon</p>
                        </div>
                    </div>

                    <div className="m-lane1">
                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/4707/386d/6775cf49602ffed59b33e87260222fd3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atZuCGaRnjRqarzjTRU5mzoqya5IuHkVcY9V~KXqbgllWNZiA74vRWSUWV~VXgQTUQGaXshY8jGFNKDXzKDLAMNV7BRNZhJm5n9WaRAcwVdt3S-jT5-ne~Z8KIt-8HbKMg7Dokt2lVfwzymiujWHWebOKF4Ct3YFMD7lXUMiY0FMqnzH1vbujWSAJE3c~QE9A2ju3KJpsb3GfyGQEkAqTQfLQfWganmcXIpI9a-AyAX-dNdKVs7vX9afjcJtpdq2WiTCt9WmG~qGrbsYcfE~scGKGtNahjeU61Vf1fgAaBGPDsYFwIWXkvMH9mDcSppj1tymnDHz23XLjcJfhdeJmw__' alt='mentor1' />
                            <h6 >Abhinav Kumar</h6>
                            <p className='m-para'>Paytm</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/5ca7/5f13/d0a544e03a5b4f8b8c7d91c52585d276?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mliwNpXyLptiIybwNfO-pYk~VuAy65t7YG4hrTzKAuFQwUxDpsfIXsNy2YbNoOLsPq--fY~5kgBDoEUSrr35tIEjJTaqxNQ-AKfsO9n848dHj7Sn4a-yvUyBuyUOHbDgVd94uZVUMdVbHUsdt4VrGJZ4R5eb7-zExV~CkZG19DIIpHGD2FppWMNbNHLgibhqZjwXaTTUx4G2sg3tMcWbZ8qbn9INs6~m8Ls8gdgc7eaJLIxfYzMGSrUgo98CbVTjH83GKLZkizpWcYr9ROPK-1M5IVcenVtx6sb5y2vkfHpDQ64NP~gSjkaQdjQaFkuM7DXh2qWY0OlP1xTDS32zsg__' alt='mentor1' />
                            <h6 >Nikhil Thomas  </h6>
                            <p className='m-para'>Udaan</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/34c3/4606/8210c94b4f67fd79bd295dc707c80c2e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P5mFd5~5XWr~VH5WQ4j5iblNwmcYlw3H7eiEu6FCAv-A2ERkXrUH7OyiYy-a94~HsOoC-CZ~8x-CBi9-jwabKVqRF1zG~~Jp50xPgJiIpDz6QA38DaOpBXFRUwrG49cs~oxHIzBi95~Ll2L0ldTBPnZmWaYCgFlywmSGH7RYFlWM8fUOuTzyWmVLh4vGX81SuikibovrJrDuOm7SY0smXg2kafseXbMp8z5Njaz~rnhBX6LsDaBuLtwvJAmRCFQ3EPfwoCLLaOq38fqjAIcmfijYjWDIRlvzZp~ll-7x9Xvs0TLf9cYOD149o90b2qZvCm4SkyxaUpXCsDinwBYadA__' alt='mentor1' />
                            <h6 >Varun Miglani  </h6>
                            <p className='m-para'>Angel Investor</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/05d2/f2f7/c44ec1b93a1f64d2f249ee0e4a741e46?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YwLBYdLEMwwSusot0gHA3MAJJH2RBwgfsLM8GzykJG5R4T3j~E~KxNU2uVWFk~l9js-KQDfqwBH6yvUKcogk-bTOaAzN8SGmtzxiXdcFP5tX4jvXZRf5M92WeBeOIfHe0Xr1NlkfYxSFkBeTn~3dTZy7Ykm1kCEfVRzKbIHUqsAZ04BaoWIrhZTDXi8of5I04cgrb4B-kqgV0R3mQXUKC4ZtX06QrqfyCevTWpyfhbCzt4UChTTvadPXFKcCHa4zxFgXi2oLpWUgP1e3S4rHfWjnzlyImq4Xgsdk-jKK5x0rGOmA6sRp4Fm6dHU0zHbkHdeOswqRfmcyTb~lxEi0Tg__' alt='mentor1' />
                            <h6 >Neerav Jain  </h6>
                            <p className='m-para'>Angel Investor</p>
                        </div>
                    </div>

                    <div className="m-lane1">
                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/2f28/bd80/be19ab7c422e94c2a10873b9ec67b5f1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWgzfdv76h84TjF2TjOd8IRjT-8hD9t11l-FixabfFOjDeXT-4uIeZEE8mLBaH~RGf5h1dfngDrPvJ2GJHcyMZ58ZL7~HWHEu5mRH31BwLKrjP9FgkYQC83j9ZUxwC9veIgwe9oyS7STx5wXNXLW-nb-FQ40IQ4I6FnP9QfvPTQ2ZUw2SBwmJwBJizEzCOtl5YfUbiUnHzc5hU41UWMpFkmfXfHLUIN-WazWNG5ilPoaSt0OMZLM3~iE6v8vTd9VzlzA6pzCx2VzMaN-faxyGWuQsy5nkA6~vKY5jDGxAqHgds2STRPBlin1n7GQucLcIuy34eQfyF8WqTPvkOwFlA__' alt='mentor1' />
                            <h6 >Dhruv Kumar </h6>
                            <p className='m-para'>Angel Investor</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/1fd5/5579/4e24cb8ccad1980a14bf5ce7825f4fd4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDZhPon4mRGBZWVr9dRiNzzBROaflRKqAmQEEt9AwnQFkUm~hn5atJNw0yRsVjfIQLzge3aLACtq8eLLMCANJCYzzU-1jV5lp1bSd3JgNEqGk4mY~IKmvftnevHjycbeSeapFnziCefa-jkfYc~Rj8pvtcVLPUIGhrRCLgSHDx3rbDY4Mi6bnm62rEOeOoA10e7CLh1ESx7O0Bu~KA-D~UCb~~zOS9VjAHfRfw2rbZ07SCz398nN~HZpDFXfCH37L2F19-Dhw6Krcxlwyc6NYKCice9sOCuWIgZnvlvnWm1J05yY6a77uWFjs13GK0Jg2cI5SiasJ-lbPu0fR3uxCA__' alt='mentor1' />
                            <h6 >Priyesh Jaiswal </h6>
                            <p className='m-para'>Flipkart</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/1b9f/c555/faec1a54972eedad4248139416a700de?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oi~h4OaG7O5MIcHAn398taWCHUQ9m0aG7aNK~rFqCIbFKS-eAxMORY2dmAJtAeBWixRQll8eEOYmb9uoYBBJQwL1fIuOKmmEcmlXJYwIiyqUrZm8WqRyJ82Co~GXEtR~~wZeRx3ujCm53gfTlDOxhjibQRlu8q2dZ6CdICshujsQB1V-VT9X2Is-kfCJe3mU7KDVaPqiwaUzLKV-9126WEuwTYttuNZwk9yWPoKOt21Mi6rYcBOtQTuU2zRNLnbsbTuTQ1SroLV3TyaYyNKXuZSvOsuLx~SQyTjawkct9adrNLMdiTBR2N7COu2QVK-AcDs7S3eJbwPyYUhLo1RjTQ__' alt='mentor1' />
                            <h6 >Rishav Agarwal </h6>
                            <p className='m-para'>Picxele</p>
                        </div>

                        <div className="m-box1">
                            <img className='m-image' src='https://s3-alpha-sig.figma.com/img/ecd3/b959/04f50eb170cf6b38f0902e3b8f3369bb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2yE7FAxe2oADgVClGvJ2GLxzM~-~VqUi~qP4Kb4vT1~XD12wtgoEG6ZXF3hB-5yMXVLf4TzLzmbIV9LMfOvlKumMfsvJVVuR~-glho2PdRju5uEoMkTk95M~YUh3AkMRVyRvPzX76YwEPcWq474mn0yIucUCg5mpdI8JqzXuHOPD3Bspx2jEYmf1PiZbgQWn~VjLp1NUpHm9bA7szVAsvXGQ5MSbxIbBypPLJmdJpYQzuj2hnNWGiF-OJt71fdcRob8NmanjnXjj3aW76B8DbWalrJeS~kz5Ya6sRt05cqXmWWr2AJM3kBkVOAsY9RLPTLgOOER-DKgO0ftTCglag__' alt='mentor1' />
                            <h6 >Mandeep Manocha  </h6>
                            <p className='m-para'>Cashify</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="portfolio">
                <div className="pleft">
                    <h5 className='p-h5'>Our <br/><span className='p-span'>Portfolio</span></h5>
                </div>
                <div className="pright">
                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/64db/880c/7c90cb00a18e64c0525a33ef69b12d0e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVP7rnzTEx~G5MRJ8hFv63CLfGpB211tgkSe6psnCR4ASedf3siQU9AdGu14bLnIK4a3kSaJBhvChUSQyfy5JEcFNBq5DmftpDUL-54LQXgewSgEDXjm654~wK0oVd8bXDoGxudAwg5~uHXiIsNbMYRMp4qDouHu1u7r6KXq-Z~VNiDLlB09qHfvsgUzcsnoOTLA-scmWsOXWgoB-fmFUi1tE7SYChu-PK7hYwbN21-VDaDScHmAxkHnbkH~nJ0xNoYOMAWk2sFwBU-fYdC9h0rQcBDT5J2L4b0ME9lCJw7Xe4Xvql4LnFlOtfO3p-xiH7UDuDFVxmBkOlG7D4eVTw__' alt='image1'/>

                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/c53d/4630/3e40b0d0263286320040df4141a3930a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isp5F7b5gYS8c-7Xv5hoVEHxe9dwOBWQnBQCqSmtlLgflaKGE~tssnP3sUDzwBdRrOe41YHiEDE0VKNPQJ1OAsV0ExzAgzLhsjcU-A65pYv6~Kq9XRKbGvGKPR85OvMYj2xWAKEjtNX806W23xM3EQVRf0l9hmTSqHnCWBUf0XJW4RHuCUCDHTDeCm4lCCMrKfPhee~BFyIN6oxnWDJeuW8NHGlWS8T9ILjI4uLqsI9YYr3qED9oaEEVRfWC6C6ln5pGQZAxcdPFr9oP8zjQgJ2x2rmvatmnt9HdoHwg7Epz6Z7bdJw8ltX2rwalZDicZpLb9WM59jv9Jo-VhTxWQQ__' alt='image2'/>

                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/65bb/29af/843a16175b7a2d7682b93dce1e5123d0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpwHNcwNIVRXAobHbQicN43qMt5RErP7P6KI88rh8P97-m1efo9AK2detRkMuaS-xf33OhQiGbfP1rHFfgg-fo7888eFLeAG5qCuPx4XuXlN3Nb4JpBPRUiF3Pgb7U~0y1AwYbOi4Vh92tN-qQVIGh1tqLFOkgfDyChJeDD3tJTaO3H0ibcFzkiL1F~6Z6FjNNlKbN~-axHj0GJX9AYaWMWHPmy6-3I9hsOz2JhJ5fB7tF2px3irupPf3J0FpgISWyLZFUefbdZmbJpYqfU5zfQHUmEtPobNJI3mR-WUZ9-fj~dldYY3NNNRtZnQDwpXRbEcdSt8pzktIPpmgda9Fw__' alt='image3'/>

                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/dfe1/b9a8/537017b64f36f6ad66d31c08432c8d04?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f40~3fppBbTGPfPZXIeJ6alM8wX0BqmgA0k~VxfjV5cF1YBHf17WbcW0tcb7mquQShogXqx4R6D3lGrJo2HZvZk9KBA02wTVH0dqdO225bAO67WcFRuMzSFu~qOKz54nK1eJa4mX-brR17AWK2XeAYlek16B~kO1bIu2wyc142JM5MNxS08dekoLHt8uby0zjrzh8axjZKGfSigYNgLkvV34lTYFBeXcAP~xcgIUTt6GNO7JI-U9NsDBOrVLqsp0yULB-ErBHHE7gTHhi2Qqk20uc~P9L6a0mTADMiAQp8GKA3J67xALJ7w3AQu~17i30~1duaFJJmUar2avVYplVQ__' alt='image4'/>

                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/576c/e758/23d119cb66f1904cb8197c816e6438c5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qa1mR4LqEzRUxR6eYcaMDBxa~eHtKm~Sj4P-ZCCb7MjX6NaiKqBBWCxx3XdVXEmpL-3lS9r8jCMMKmoTvzzZ8NQ0KZ5r4-DCNvJXu9329EQIH4wvQ4ZZ9WnwddoxoBNIgk9eFMJSgy0zPhUGey9EOR2p8N4XOPhb3Blh56M0QGWsvm0IXOBcKwPQICLxhnbVE5dEcm2qZv1jwAEV8XVlTMGpfKT3a0KjGQjrNCDi3UHitj3pUG6YLrS~W4LFT2-Z47OW7FDOfb5MwX2GXt00CLW5MpiKEWR5RMee5RjBGtq9qQHx4ehL~~CnqLIXPnnydrOVxxcwR1f0A93KaJ28Mw__' alt='image5'/>


                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/ef2b/41c8/19aba96436063d27f82c9c4e40844c2c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UK1hQGNkKQDFZYjQn4T1Z1J-2Ew67ZOG98XlbuyYbcfQ9-zuH3KVjz1YMolB1BQ8HZARDzQ4QMToNSryOFLT1xMPiap0773u4Sznkr9mmkgq6OiqQFMlh3gl-UojljWtsTXaYinsycD60AyfyPcVIgJ21~Idt2FC-~oyPfycNfisuIQjPFYQ1Ocg8G-jIN3Ar5I7qA5h55ueSuQ7b-ljGYbsIA8DxfdLhqnp-~C9ikrKu5zKsQ6fvZFE1PAzq-IjpU5kyp6NAZedy6gM0xxjqw4FElzdQs6OGcKrKblBimcah8k5eSaoz9cx0nLMHZol79G8MJJOn2hzOdi~dZ54KQ__' alt='image6'/>

                    <img className='p-image' src='https://s3-alpha-sig.figma.com/img/bb46/7fa3/929654f262704ac3dad733ef0dca0bf2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puSiD-Ss07bxbicO6-esnDmL85ennir7Y35sW6sJuTN2Pk-Rp5BxtvJ4naTVnAkEr9Phb5XrQ~tJ0y9p4DI~O4L8DX9B6mLGIX-lDloBSqxoOkSePOvsyKxYhJQNT9pn0~PCVB6BXhABw4Eaw1BJQ9xgMG-v0liHtBvyCPY~P0gbGMJFZxQ2dW3jnBhwpyb8zGSLQYzEUzYK~rJnxzbePKB6Uas7VzFdW5OwiTVzzude-GVHseLH3VYQn0W4skR~jWzsPEYljf9k4iVPfXi9bn7vQqNB7LAJjIErJZdaWcubMb18shqJo5BPZ~GZ8G4ZnJZzfZbMgxjwnab2z1WiIw__' alt='image7'/>                    
                </div>
            </div>
        </div>
    )
}

export default Offer
