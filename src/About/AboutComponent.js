import React, { Component } from 'react';
import './About.css';

class AboutComponent extends Component {
  render() {
    return(
      <main>
        <h1>About</h1>
        <div className="main__text main__text1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum pellentesque arcu quis faucibus.
            Vivamus fringilla vulputate aliquam. Ut ut turpis varius, varius nulla a, viverra mi. Praesent maximus eleifend orci et ultrices.
            Aenean commodo, orci id accumsan feugiat, mi purus tincidunt justo, in tincidunt eros sapien at diam.
            Nulla maximus ut odio quis sagittis. Donec ornare pharetra eros. Etiam eu ex ornare,
            convallis felis at, fermentum est. Proin ac quam at elit porta varius sed non turpis.
            Sed molestie quam eu lacus consectetur, id iaculis ante posuere. Vivamus sed consequat mauris.
            Donec efficitur, sapien dictum lobortis sagittis, orci libero pulvinar felis,
            quis malesuada arcu mauris non lorem. Etiam semper erat turpis, nec lacinia nunc rhoncus eget.
          </p>
          <p>
            Sed tincidunt ante at metus suscipit, at condimentum enim ultricies. Duis vitae interdum massa. Duis mattis,
            lorem ac molestie porttitor, urna magna egestas nunc, in lacinia felis lacus in odio. Sed lectus massa, semper vitae diam sed, vulputate malesuada dolor.
            Nunc sagittis dui ligula. Sed volutpat sit amet justo id varius. Aliquam non dolor sit amet lacus consequat porttitor.
          </p>
        </div>
      </main>
    )
  }
}

export default AboutComponent;
