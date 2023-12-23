import React from 'react'

const BlogPage = () => {
    return (
        <section style={{ maxWidth: 1200, marginTop: -30 }} className='flex justify-content align-center'>
            <div>
                <div className='center-text'>
                    <h1 className='f-size-50'>Blog</h1>
                    <p className='f-size-18'>Consejos sobre tecnología, reflexiones y política... ¿Por qué los programadores tenemos que ser tímidos?</p>
                </div>
                <div className='flex column p-20 mt-50 end white-text' style={{
                    backgroundImage: "url('https://images.lifestyleasia.com/wp-content/uploads/sites/5/2022/03/25181758/Louis-Vuitton-LV-Twist-HoYeon-Jung-1-1600x800.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 300
                }}>
                    {/* <p style={{ position: 'relative', top: 0, right: 0 }}>Más reciente</p> */}
                    <p>23/12/23</p>
                    <h3 className='mt-10 f-size-24'>UX review presentations</h3>
                    <p className='f-size-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in quas magni sapiente porro laboriosam vel repudiandae architecto praesentium nobis non tenetur libero reprehenderit nesciunt, facere molestiae possimus cupiditate voluptatibus?</p>
                    <div className='flex gap-15 mt-10'>
                        <p className='white-border ph-20 radius'>UX</p>
                        <p className='white-border ph-20 radius'>Review</p>
                        <p className='white-border ph-20 radius'>Presentations</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage