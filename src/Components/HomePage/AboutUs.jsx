import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid about-cover">
                <div className="container">
                    <div className="row about-row">
                        <div className="col-md-6 no-padding image">
                            <img src="assets/images/about.jpg"  className='img-fluid' alt />
                        </div>
                        <div className="col-md-6 detail container">
                            <h2>About Smart Computers</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  consectetur adipiscing elit. Pellentesque tincidunt metus quis enim fermentum, a posuere ligula vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi turpis tortor, ultrices eu posuere eu, eleifend eget eros. Quisque maximus tellus eu magna bibendum faucibus.</p>
                            <p>Vestibulum convallis rhoncus efficitur. Sed pellentesque sed eros in maximus. Praesent vel nibh sem. Mauris efficitur sodales libero id volutpat. Vestibulum sit amet diam massa. Nunc vestibulum suscipit faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque maximus metus at nisl aliquet lobortis. Praesent mollis quam et viverra placerat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs