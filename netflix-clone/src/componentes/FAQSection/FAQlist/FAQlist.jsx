import React from 'react'
import FAQ from '../FAQ/FAQ'

function FAQlist() {
  return (
    <div className="FAQ-container">
      <h2>Frequently Asked Questions</h2>
      <FAQ
        Questions="What is Netflix?"
        Answer={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`}
      />
      <FAQ
        Questions="How much does Netflix cost?"
        Answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99/month."
      />
      <FAQ
        Questions="Where can I watch?"
        Answer={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n
        You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
      />
      <FAQ
        Questions="How do I cancel?"
        Answer="Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <FAQ
        Questions="What can I watch on Netflix?"
        Answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <FAQ
        Questions="Is Netflix good for kids?"
        Answer={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
    }
      />
    </div>
  );
}

export default FAQlist
