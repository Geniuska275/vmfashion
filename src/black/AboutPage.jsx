import Layout from "./Layout"
import image1 from "./n1.jpeg"
import image3 from "./n3.jpeg"
import image2 from "./n2.jpeg"


function AboutPage({ section }) {
  const title = section === "terms" ? "Terms and Conditions" : "About Us"

  return (
    <Layout>
      <section className="w-full">
      {title ==="Terms and Conditions" &&    <h2 className="font-playfair text-xl md:text-2xl lg:text-xl font-bold mb-8">Refund Policy</h2>}
        {title ==="Terms and Conditions" &&  <p className="mb-4">
               Refund policy
Please note, for hygiene reasons we are unable to refund or exchanges on our products. You are
most welcome to try any items of clothing in our store.
              </p>}
        <div className="prose prose-invert prose-amber max-w-none">
          {section === "terms" ? (
            <div>
              <h3 className="text-xl font-playfair mb-4">Terms and Conditions</h3>
              <h3 className="text-md font-playfair mb-4">Terms of Service</h3>
              <h3 className="text-lg font-playfair mb-4">OVERVIEW</h3>
               
              <p className="mb-4">
               This website is operated by VM Fashion. Throughout the site, the terms “we”, “us” and “our” refer
to VM Fashion. VM Fashion offers this website, including all information, tools and services available
from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies
and notices stated here
              </p>
              <p className="mb-4">
              By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to
be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those
additional terms and conditions and policies referenced herein and/or available by hyperlink. These
Terms of Service apply to all users of the site, including without limitation users who are browsers,
vendors, customers, merchants, and/ or contributors of content.
              </p>

               <p className="mb-4">
               Please read these Terms of Service carefully before accessing or using our website. By accessing or
using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all
the terms and conditions of this agreement, then you may not access the website or use any
services. If these Terms of Service are considered an offer, acceptance is expressly limited to these
Terms of Service.
              </p>


               <p className="mb-4">
                Any new features or tools which are added to the current store shall also be subject to the Terms of
Service. You can review the most current version of the Terms of Service at any time on this page.
We reserve the right to update, change or replace any part of these Terms of Service by posting
updates and/or changes to our website. It is your responsibility to check this page periodically for
changes. Your continued use of or access to the website following the posting of any changes
constitutes acceptance of those changes.
              </p>
            <p className="mb-4">
              Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows
us to sell our products and services to you.
              </p>
            

              <h3 className="text-xl font-playfair mb-4">SECTION 1 -ONLINE STORE TERMS </h3>
                <p className="mb-4">
             By agreeing to these Terms of Service, you represent that you are at least the age of majority in your
state or province of residence, or that you are the age of majority in your state or province of
residence and you have given us your consent to allow any of your minor dependents to use this
site.

              </p>
                  <p className="mb-4">
            
                  You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the
Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
You must not transmit any worms or viruses or any code of a destructive nature.
A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </p>







                <h3 className="text-xl font-playfair mb-4">SECTION 2 -GENERAL CONDITIONS </h3>
                <p className="mb-4">
                 We reserve the right to refuse service to anyone for any reason at any time.
You understand that your content (not including credit card information), may be transferred
unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and
adapt to technical requirements of connecting networks or devices. Credit card information is
always encrypted during transfer over networks.
              </p>
                  <p className="mb-4">
                  You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of
the Service, or access to the Service or any contact on the website through which the service is
provided, without express written permission by us.
The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
              </p>











                  <h3 className="text-xl font-playfair mb-4">SECTION 3 -ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION </h3>
                <p className="mb-4">
                   We are not responsible if information made available on this site is not accurate, complete or
current. The material on this site is provided for general information only and should not be relied
upon or used as the sole basis for making decisions without consulting primary, more accurate, more
complete or more timely sources of information. Any reliance on the material on this site is at your
own risk.
This site may contain certain historical information. Historical information, necessarily, is not current
and is provided for your reference only. We reserve the right to modify the contents of this site at
any time, but we have no obligation to update any information on our site. You agree that it is your
responsibility to monitor changes to our site.

              </p>
                 









                  <h3 className="text-xl font-playfair mb-4">SECTION 4 -MODIFICATIONS TO THE SERVICE AND PRICES </h3>
                <p className="mb-4">
                Prices for our products are subject to change without notice.
We reserve the right at any time to modify or discontinue the Service (or any part or content
thereof) without notice at any time.
We shall not be liable to you or to any third-party for any modification, price change, suspension or
discontinuance of the Service.

              </p>
                 











                  <h3 className="text-xl font-playfair mb-4">SECTION 5 -PRODUCTS OR SERVICES (if applicable)</h3>
                <p className="mb-4">
                
Certain products or services may be available exclusively online through the website. These products
or services may have limited quantities and are subject to return or exchange only according to our
Return Policy.
We have made every effort to display as accurately as possible the colours and images of our
products that appear at the store. We cannot guarantee that your computer monitor's display of any
colour will be accurate.
We reserve the right, but are not obligated, to limit the sales of our products or Services to any
person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We
reserve the right to limit the quantities of any products or services that we offer. All descriptions of
products or product pricing are subject to change at anytime without notice, at the sole discretion of
us. We reserve the right to discontinue any product at any time. Any offer for any product or service
made on this site is void where prohibited.
We do not warrant that the quality of any products, services, information, or other material
purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.

              </p>
                 











                  <h3 className="text-xl font-playfair mb-4">SECTION 6 -ACCURACY OF BILLING AND ACCOUNT INFORMATION </h3>
                <p className="mb-4">
                 We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or
cancel quantities purchased per person, per household or per order. These restrictions may include
orders placed by or under the same customer account, the same credit card, and/or orders that use
the same billing and/or shipping address. In the event that we make a change to or cancel an order,
we may attempt to notify you by contacting the e-mail and/or billing address/phone number
provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our
sole judgment, appear to be placed by dealers, resellers or distributors. All orders will be sent out on
the next working day if ordered after 1pm.
You agree to provide current, complete and accurate purchase and account information for all
purchases made at our store. You agree to promptly update your account and other information,
including your email address and credit card numbers and expiration dates, so that we can complete
your transactions and contact you as needed.
For more detail, please review our Returns Policy.

              </p>
                 



                  <h3 className="text-xl font-playfair mb-4">SECTION 7 -OPTIONAL TOOLS </h3>
                <p className="mb-4">
                We may provide you with access to third-party tools over which we neither monitor nor have any
control nor input.
You acknowledge and agree that we provide access to such tools ”as is” and “as available” without
any warranties, representations or conditions of any kind and without any endorsement. We shall
have no liability whatsoever arising from or relating to your use of optional third-party tools.

              </p>
                  <p className="mb-4">
            Any use by you of optional tools offered through the site is entirely at your own risk and discretion
and you should ensure that you are familiar with and approve of the terms on which tools are
provided by the relevant third-party provider(s).
We may also, in the future, offer new services and/or features through the website (including, the
release of new tools and resources). Such new features and/or services shall also be subject to  these Terms of Service.
              </p>






                  <h3 className="text-xl font-playfair mb-4">SECTION 8 - THIRD-PARTY LINKS </h3>
                <p className="mb-4">
                  Certain content, products and services available via our Service may include materials from third-
parties.
Third-party links on this site may direct you to third-party websites that are not affiliated with us.
We are not responsible for examining or evaluating the content or accuracy and we do not warrant
and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.

              </p>
                  <p className="mb-4">
                 We are not liable for any harm or damages related to the purchase or use of goods, services,
resources, content, or any other transactions made in connection with any third-party websites.
Please review carefully the third-party's policies and practices and make sure you understand them
before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-
party products should be directed to the third-party.
              </p>






                  <h3 className="text-xl font-playfair mb-4">SECTION 9 -USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS </h3>
                <p className="mb-4">
                If, at our request, you send certain specific submissions (for example contest entries) or without a
request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether
online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at
any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any
medium any comments that you forward to us. We are and shall be under no obligation (1) to
maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond

              </p>to any comments.
                  <p className="mb-4">
            We may, but have no obligation to, monitor, edit or remove content that we determine in our sole
discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or
otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
You agree that your comments will not violate any right of any third-party, including copyright,
trademark, privacy, personality or other personal or proprietary right. You further agree that your
comments will not contain libellous or otherwise unlawful, abusive or obscene material, or contain
any computer virus or other malware that could in any way affect the operation of the Service or any
related website. You may not use a false e-mail address, pretend to be someone other than yourself,
or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible
for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
              </p>







                  <h3 className="text-xl font-playfair mb-4">SECTION 10 - PERSONAL INFORMATION</h3>
                <p className="mb-4">
               Your submission of personal information through the store is governed by our Privacy Policy. To view
               our Privacy Policy.

              </p>
                  



                  <h3 className="text-xl font-playfair mb-4">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS </h3>
                <p className="mb-4">
              Occasionally there may be information on our site or in the Service that contains typographical
errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers,
product shipping charges, transit times and availability. We reserve the right to correct any errors,
inaccuracies or omissions, and to change or update information or cancel orders if any information
in the Service or on any related website is inaccurate at any time without prior notice (including
after you have submitted your order).
We undertake no obligation to update, amend or clarify information in the Service or on any related
website, including without limitation, pricing information, except as required by law. No specified
update or refresh date applied in the Service or on any related website, should be taken to indicate
that all information in the Service or on any related website has been modified or updated.
              </p>
                  





                  <h3 className="text-xl font-playfair mb-4">SECTION 12 -PROHIBITED USES </h3>
                <p className="mb-4">
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using
the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in
any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws,
or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual
property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate,
or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or
disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other
type of malicious code that will or may be used in any way that will affect the functionality or
operation of the Service or of any related website, other websites, or the Internet; (h) to collect or
track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape;
(j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of
the Service or any related website, other websites, or the Internet. We reserve the right to
terminate your use of the Service or any related website for violating any of the prohibited uses.
              </p>

                     <h3 className="text-xl font-playfair mb-4">SECTION 13 -DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h3>
                <p className="mb-4">
              We do not guarantee, represent or warrant that your use of our service will be uninterrupted,
timely, secure or error-free.
We do not warrant that the results that may be obtained from the use of the service will be accurate
or reliable.
You agree that from time to time we may remove the service for indefinite periods of time or cancel
the service at any time, without notice to you.
              </p>
                     <p className="mb-4">
              You expressly agree that your use of, or inability to use, the service is at your sole risk. The service
and all products and services delivered to you through the service are (except as expressly stated by
us) provided 'as is' and 'as available' for your use, without any representation, warranties or
conditions of any kind, either express or implied, including all implied warranties or conditions of
merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
              </p>

                     <p className="mb-4">
             In no case shall VM Fashion, our directors, officers, employees, affiliates, agents, contractors,
interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct,
indirect, incidental, punitive, special, or consequential damages of any kind, including, without
limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar
damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising
from your use of any of the service or any products procured using the service, or for any other claim
related in any way to your use of the service or any product, including, but not limited to, any errors
or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the
service or any content (or product) posted, transmitted, or otherwise made available via the service,
even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or
the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our
liability shall be limited to the maximum extent permitted by law.
              </p>



              {/* More terms content would go here */}
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-playfair mb-4">About Us</h3>
              <div className="flex about gap-3 justfify-evenly ">
                <img src={image1} className="w-[300px] a h-[200px] rounded-lg"/>
                <p className=" leading-8 text-justify text-xl md:text-2xl  md:leading-[50px] font-[Poppins] mt-3"> We are VM Fashion
(formally Jabeens)
established in 1890s.
A family run business in
the heart of Wembley.
We pride ourselves in
bringing our customers
sophisticated and
elegant ethnic wear for all occasions.</p>
                </div>

                <div className="flex about justfify-evenly my-[60px] gap-2">
                <p className="leading-8 text-justify text-xl md:text-2xl md:leading-[50px] font-[Poppins]">We take pride in our
products because they
are made from the very
best fabric, stitching
and craftspeople. We
stock high quality
clothing for every price
range. From the design
to the fitting, we know
it will be hard to find
ethnic wear like ours.</p>
                <img src={image2} className=" a w-[200px] h-[200px] rounded-lg" />
                </div>

{/*  */}
                <div className="flex  about justify-evenly my-[60px] gap-3 ">
                <p className="leading-8 text-justify md:leading-10 text-xl md:text-2xl font-[Poppins]">Our aim is not only to
provide high quality
clothing but to keep up-
to-date with the latest
fashion and make our
customers feel
glamourous. We offer in
house tailoring and can
custom make outfits too.
Our passion shows in our
clothing so please do
visit our store or shop
online to find your dream outfit.</p>
                <img  src={image3} className=" a w-[300px] h-[200px] rounded-lg"/>
                </div>
             
              {/* More about content would go here */}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
