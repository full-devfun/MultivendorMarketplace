import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  width: 90vw;
  margin: 8rem auto 4rem;
  max-width: 1000px;
`;

const Terms = (props) => {

  useEffect(() => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

    if (props.privacyPolicy) {
      scrollToRef(myRef);
    }
  }, [props]);

  const myRef = useRef(null);
  
  return(
    <>
    <Wrapper>
    <h2>Buyer Policy</h2>
      <p>Local Guru is a venue where you can purchase local goods directly from local producers. Our goal is to bring organic locally grown and handmade goods right to your door while supporting the local community. Please read on to find out more about your rights, as well as what is expected of you, as a buyer.</p>
      <p>This policy is a part of our&nbsp;Terms of Use. By shopping on Local Guru, you&rsquo;re agreeing to this policy and our Terms of Use.</p>
      <ol>
      <li>Understanding Local Guru&rsquo;s Limitations as a Venue</li>
      <li>Purchasing an Item on Local Guru</li>
      <li>Leaving a Review of an Item</li>
      <li>Reporting a Problem with an Order or Returning an Item</li>
      </ol>
      <ol>
      <li><strong>1</strong>. <strong>Understanding Local Guru&rsquo;s Limitations as a Venue</strong></li>
      </ol>
      <p>Local Guru provides a venue for buyers to discover and purchase from sellers. It is important to note that Local Guru is not a part of that transaction. By shopping on Local Guru, you understand that:&nbsp;</p>
      <ol>
      <li>You are not buying directly from Local Guru, but from one of the many talented sellers on Local Guru;&nbsp;</li>
      </ol>
      <ol>
      <li>Local Guru does not pre-screen sellers and therefore does not guarantee or endorse any items sold on Local Guru or any content posted by sellers (such as photographs or language used in listings or shop policies);&nbsp;</li>
      </ol>
      <ol>
      <li>You assume responsibility if you provide your own materials for a custom order.</li>
      </ol>
      <ol start="2">
      <li><strong>Purchasing an Item on Local Guru</strong></li>
      </ol>
      <p>When you buy from a seller on Local Guru, you&rsquo;re directly supporting an independent producers. By making a purchase from a seller on Local Guru, you agree that you have:&nbsp;</p>
      <ol>
      <li>Read the item description before making a purchase;&nbsp;</li>
      <li>Submitted appropriate payment for item(s) purchased; and</li>
      <li>Provided accurate shipping information to Local Guru</li>
      </ol>
      <p>You also agree to comply with our&nbsp;Local Guru Payments Policy&nbsp;when you use Local Guru Payments.</p>
      <p><br /><br /><br /><br /></p>
      <ol start="3">
      <li><strong>Leaving a Review of an Item</strong></li>
      </ol>
      <p>Reviews are a great way to learn about a seller&rsquo;s items, help good sellers build a strong reputation, or help warn other buyers about a poor experience.&nbsp;</p>
      <p>You can leave a&nbsp;review, including a one to five star rating for 100 days after your item&rsquo;s estimated delivery date. If an estimated delivery date is not available, the review window opens after the order&rsquo;s&nbsp;processing time&nbsp;and shipping time have elapsed. Your review and&nbsp;profile information&nbsp;will be publicly displayed on the seller's listing and review pages.&nbsp;</p>
      <p>By leaving a review, you acknowledge that your content may not:&nbsp;</p>
      <ol>
      <li>Contain private information;&nbsp;</li>
      <li>Contain obscene, racist, or harassing language or imagery;&nbsp;</li>
      <li>Violate our&nbsp;Anti-Discrimination Policy;&nbsp;</li>
      <li>Contain prohibited medical drug claims;&nbsp;</li>
      <li>Contain advertising or spam;&nbsp;</li>
      <li>Be about things outside the seller&rsquo;s control, such as a shipping carrier, Local Guru, or a third party;&nbsp;</li>
      <li>Contain threats or&nbsp;extortion;</li>
      <li>Include&nbsp;shilling&nbsp;or otherwise falsely inflate a shop&rsquo;s review score; or&nbsp;</li>
      <li>Undermine the integrity of the Reviews system.&nbsp;</li>
      </ol>
      <p><strong>Local Guru&rsquo;s Delivery Process</strong></p>
      <ol>
      <ol>
      <li><strong>Unattended Delivery.</strong></li>
      </ol>
      </ol>
      <p>In certain areas, Local Guru may offer unattended delivery. If available in your area, this option is contained in the "Delivery" section of "Your Account" on our Platform. If you select the unattended delivery option, you, and not Local Guru, are solely responsible for products that are left at your delivery location.</p>
      <ol>
      <ol>
      <li><strong>Limits and Adjustments to Delivery.</strong></li>
      </ol>
      </ol>
      <p>Local Guru delivers case sizes of a variety of different goods, including but not limited to cases of beverages and paper towels. Given the heavy weight of some of these products, and our concern for the health and safety of our personnel, we have purchase limits on a variety of these items on our Platform. Additionally, in the interest of the health and safety of our personnel, in non-elevator buildings, the highest floor we can deliver to is the 5th floor and with orders containing 3 cases or more of beverages or other heavy items, we cannot deliver above the 4th floor. In the event of a non-functioning elevator, the preceding delivery restrictions apply. Our technology cannot and does not enforce these limits. We ask you to abide by these service limitations, as we the reserve the right to limit a delivery when an order exceeds these limitations.</p>
      <ol>
      <ol>
      <li><strong>Invoices.</strong></li>
      </ol>
      </ol>
      <p>You will receive an email invoice the day of your delivery. All of your order invoices are available in the "Your Account" section of our Platform. If something is missing from your order, please contact our Customer Service department via our Customer Inquiry e-mail form.</p>
      <ol>
      <ol>
      <li><strong>Unforeseen Delivery Issues and Inclement Weather.</strong></li>
      </ol>
      </ol>
      <p>In the case of inclement weather or unforeseen delivery complications, it may be necessary to make adjustments to our delivery schedule which will cause us to suspend chosen delivery dates and times. If there will be a significant delay in delivering your order, a customer service representative may call or e-mail you to let you know the status of your delivery time. We will attempt to deliver your order as quickly as possible when the conditions permit. We will never deliver an order past 12:30 AM without your consent. If your designated delivery location (e.g. street closure) or day is inaccessible, rendering us unable to make the delivery, we will contact you to determine the best alternate location and/or date to make the delivery.</p>
      <ol>
      <ol>
      <li><strong>Tips.</strong></li>
      </ol>
      </ol>
      <p>Local Guru delivery personnel are allowed to accept tips. Customers are under no obligation to tip delivery personnel but have the option of doing so if exceptional service is provided by the delivery personnel.</p>
      <ol>
      <ol>
      <li><strong>Ordering.</strong></li>
      </ol>
      </ol>
      <p>Delivery is available on most non-holiday weekends; check the Delivery Info page for exact delivery date and time. Orders must be received before the posted cutoff time for a given delivery. Available delivery date and time windows and associated delivery fees and promotions will be shown during the ordering process. You can modify an existing order (including the addition or deletion of items, a change in the time or delivery date, and the cancellation of your order) via the Platform (in the "Your Account" section) up until the posted cutoff time for that delivery. You may cancel orders via the "Your Account" up until the Friday before the delivery. Modified orders are subject to price changes and a change of a delivery date and time may not guarantee the availability of your desired items. Cancellation of orders after the required cut-off time will result in a forfeit of the funds paid for the originally requested items.</p>
      <ol>
      <li><strong>Delivery Requirements.</strong></li>
      </ol>
      <p>To receive delivery, your requested delivery destination must be in a commercial building where Local Guru is permitted to make deliveries and you or an authorized representative must be present to receive your order from our delivery personnel during your selected delivery window. Local Guru reserves the right to limit deliveries to the lobby or main entrance of your commercial building. The authorized representative can accept your goods when you are not present at the time you had selected for delivery and shall accept the goods under all of the same terms and conditions that would apply had you accepted the delivery yourself. Anyone at the delivery address who receives the delivery is conclusively presumed to be authorized to receive the delivery. If you and the authorized representative are not present during your selected delivery window, Local Guru will hold your order for Pickup. Order must be picked up within 2 business day otherwise the order will be canceled and you will be charged a restocking fee as described above.</p>
      <p><strong>Local Guru&rsquo;s Case System</strong></p>
      <p>Although Local Guru is not directly involved in a transaction between a buyer and a seller, we provide a case system in the unlikely event that your order does not go as expected. By using Local Guru&rsquo;s case system, you understand that Local Guru may use your personal information for the purpose of resolving disputes with other members. You can use Local Guru&rsquo;s case system to come to a resolution with the seller in the event of a non-delivery or if an item you receive is not as described in the listing.&nbsp;</p>
      <p><strong>Non-Delivery</strong><strong><br /><br /></strong></p>
      <p>A non-delivery occurs when a buyer places an order but does not receive the item. The following are examples of non-delivery cases:&nbsp;</p>
      <ol>
      <li>There is no proof that the item was&nbsp;shipped to the buyer.</li>
      <li>An item was not sent to the address provided on Local Guru.</li>
      </ol>
      <p><br /><br /></p>
      <p>An item is not as described if the buyer can demonstrate that it is significantly different from the seller&rsquo;s listing description or photos. Here are a few examples of not as described cases:&nbsp;</p>
      <ol>
      <li>The buyer received the incorrect quantity of items (e.g., the buyer purchased three items but only received two).</li>
      <li>The condition of the item is misrepresented (e.g., the item is not ripe, bruised&hellip;inedible).</li>
      </ol>
      <p>Not as described cases can also be filed for late delivery. In order to qualify as late delivery, the buyer must provide proof that all of these conditions have been met:&nbsp;</p>
      <ol>
      <li>The item(s) were ordered for a specific date or event.</li>
      <li>The item(s) are rendered useless after that date.</li>
      <li>If Local Guru determines that an item is not as described, the seller will be required to refund the order, including original shipping and return shipping. In the event that Local Guru needs to refund the return shipping cost on behalf of the seller, that refund may come in the form of a Local Guru Credit.</li>
      </ol>
      <p>Some disputes don&rsquo;t qualify for Local Guru&rsquo;s case system. These include:</p>
      <ol>
      <li>Items that are received after the agreed-upon delivery date due to shipping delays.</li>
      <li>Items that are returned without a return agreement.</li>
      <li>Items that are accurately described but don&rsquo;t meet a buyer's expectations.</li>
      <li>Items that are purchased in person.</li>
      <li>Transactions where payment is not made via Local Guru&rsquo;s checkout system.</li>
      </ol>
      <p ref={myRef}><strong>Requesting a Cancellation</strong></p>
      <p>Only sellers or Local Guru may cancel transactions. Buyers may request that a seller cancel an order via Local Guru Conversations. Note that all cancellations must comply with our&nbsp;Anti-Discrimination Policy.</p>
      <p><strong>Privacy Policy</strong></p>
      <p>At Local Guru, we value your privacy rights. We believe committed to being transparent about our privacy practices, including how we treat your personal information. We provide you with the opportunity to choose how Local Guru uses certain information. This policy explains our privacy practices for localguru.com (which we&rsquo;ll refer to as the "Site"), We'll refer to the Site, and our other services as the "Services." This policy does not apply to the practices of third parties (including other members who sell using the Services or API users) who may also collect or receive data in connection with your use of the Services.</p>
      <ol>
      <li>Accepting the Privacy Policy</li>
      <li>Information Collected or Received</li>
      <li>Use of Cookies</li>
      <li>Choice &amp; Control</li>
      <li>Findability</li>
      <li>Messages from Local Guru</li>
      <li>Security</li>
      <li>Retention</li>
      <li>Your Rights</li>
      <li>Your Responsibilities</li>
      <li>Withdrawing Consent</li>
      <li>Privacy Policy Changes</li>
      <li>Contact</li>
      </ol>
      <ol>
      <li><strong> Accepting the Privacy Policy</strong></li>
      </ol>
      <p>In order to provide you with services and run our business we need to process your personal information. By accepting our&nbsp;Terms of Use, you are confirming that you have read and understand this policy, including how and why we use your information. <strong>If you are uncomfortable with Local Guru collecting or processing your personal information in the ways described in this policy, you shouldn&rsquo;t use the Services.</strong> We are not responsible for the content or the privacy policies or practices of any of our members, third-party websites, or third-party apps.</p>
      <p>Under our Terms of Use&nbsp;all account owners must be at least 18 years of age. Minors under 18 years of age and at least 13 years of age are permitted to use Local Guru Services only if they have the appropriate permission and direct supervision by the owner of the account. Children under age 13 are not permitted to use Local Guru or the Services. You are responsible for any and all account activity conducted by a minor on your account.</p>
      <p>By using the Services, you acknowledge that Local Guru will use your information in the United States, and any other country where Local Guru may operate. Please be aware that the privacy laws and standards in certain countries, including the rights of authorities to access your personal information, may differ from those that apply in the country in which you reside. We will transfer personal information only to those countries to which we are permitted by law to transfer personal information, and we will take steps to ensure that your personal information continues to enjoy appropriate protections.</p>
      <ol start="2">
      <li><strong> Information Collected or Received</strong></li>
      </ol>
      <p>In the course of providing our Services, we collect or receive your personal information in a few different ways. Often, you choose what information to provide, but some information is required for you to use and for us to provide you the Services.</p>
      <p><em>Registration, Account Setup, Service Usage:</em>&nbsp;In order to use the Services, you need to provide us with a valid email address, a name associated with your account that you can choose to represent your identity on Local Guru. You need to provide this information to enable us to provide you with the Services. Depending on which services you choose to use, additional information, such as billing and payment information (including billing contact name, address, telephone number, credit card information), a telephone number, and/or a physical postal address, may be necessary in order for us to provide a particular service. As a Local Guru seller, Local Guru may require information such as your full name, date of birth, and/or other proof of identification in order to verify your identity, provide this service to you, and comply with applicable law.&nbsp;</p>
      <p><strong><em>Profile</em></strong><em>:</em>&nbsp;You may provide your name and other personal information (such as birthday, gender, location) in connection with your account and activity.&nbsp;</p>
      <p>The name associated with your account is publicly displayed and connected to your Local Guru activity. Other people may see the date you joined; ratings, and reviews for items you sold; your profile information; items you listed for sale.</p>
      <p><strong><em>Automated Information</em></strong><em>:</em>&nbsp;Local Guru automatically receives and records information from your browser or your mobile device when you visit the Site or use the Apps or use certain other Services, such as your IP address or unique device identifier, cookies, and data about which pages you visit in order to allow us to operate and provide the Services. This information is collected automatically and stored in log files. This information may be combined with information from your browser or your mobile device with other information that we or our partners collect about you, including across devices. We use this information to prevent fraud and to keep our services secure. We also use it to analyze and understand how our services work for members and visitors, and provide advertising and a more personalized experience for members and visitors.</p>
      <p>We may also automatically collect device-specific information when you access, or use our Services. This information may include information such as the hardware model, operating system information, app version, app usage and debugging information, browser information, IP address, and device identifiers.&nbsp;</p>
      <p><strong><em>Location Information</em></strong><em>:</em>&nbsp;We may collect information about your use of the Services for advertising, for analytics, to serve content, and to protect our services. This may include your IP address, browser information (including referrers), and device information. You may choose to publish your location when you sell on Local Guru.&nbsp;</p>
      <p>We may obtain location information you provide in your profile or your IP address. With your consent, we may also determine location by using other information from your device. We may use and store information about your location to provide features and to improve and customize the Services. Certain non-precise location services, such as for security and localized policies based on your IP address or submitted address, are critical for the site to function. We will only share your geo-location details with third parties (like our mapping, payments, or, to the extent applicable, advertising providers) in order to provide you with the Services.&nbsp;</p>
      <p><strong><em>Analytics Information:</em></strong>&nbsp;We use data analytics to ensure site functionality and improve our services for our users. We do not link the information we store within the analytics software to any personally identifiable information that you submit.</p>
      <p><strong><em>Non-Member Information:</em></strong>&nbsp;Local Guru may receive or obtain information (for example, an email address or IP address) about a person who is not yet a registered Local Guru member (a &ldquo;non-member&rdquo;) in connection with certain Local Guru features, a member invites a non-member to visit the Site, a non-member engages in a transaction, or a non-member uses the Guest Checkout feature when making a purchase through our services. Non-member information is used only for the purposes disclosed when it was submitted to Local Guru or to facilitate action authorized by the non-member.</p>
      <ol start="3">
      <li>Use of Cookies</li>
      </ol>
      <p>Like most websites, Local Guru uses cookies. Cookies are small pieces of information that are stored on your computer. They are designed to record your browsing history, log in information, and your web surfing history. Personal information is not collected by cookies, however, if you previously provided personal information then cookies may be linked to this information.</p>
      <p>In some cases, we use third-party advertising companies to show you ads when you visit our website. These companies may use your stored cookies to provide you advertisements about goods and services that are of an interest to you.</p>
      <p>You can disable the use of cookies by changing the setting in your web browser.</p>
      <ol start="4">
      <li>Choice &amp; Control</li>
      </ol>
      <p>Local Guru understands that our members value having control over their own information, so we give you the choice of providing, editing, or removing certain information, as well as choices about how we contact you. You may change or correct your Local Guru account information through your account settings. You may also remove certain optional information that you no longer wish to be publicly visible through the Services, such as your name. You can also request the deletion of the personal information in your account. We use non-technically necessary and similar technologies.&nbsp;</p>
      <p>You may also control the receipt of certain types of communications from Local Guru in your account settings. Local Guru may send you messages about the Services or your activity. Some of these messages are required, service-related messages for members (such as transactional messages or legal notices). Other messages are not required, such as newsletters. You can control which optional messages you choose to receive by changing your account settings, and you can learn more in the &ldquo;Messages from Local Guru&rdquo; section of this policy.</p>
      <p>We partner with third parties to manage our advertising on other sites. Our third-party partners may use cookies or similar technologies in order to provide you with advertising based upon your browsing activities and interests. If you have chosen to connect your account to an external third-party application, such as Facebook, or an app developed using the API, you can change your settings and remove permission for the app by changing your account settings.</p>
      <p>If you no longer wish to use our services or receive service-related messages (except for legally required notices), then you may close your account.&nbsp;</p>
      <ol start="5">
      <li>Messages from Local Guru</li>
      </ol>
      <p>From time to time we may need to contact you. Primarily, these messages are delivered by email for a variety of reasons, including marketing, transactions, and service update purposes. You can opt out of receiving marketing communications via email in your account settings or by following the unsubscribe link in any marketing email you receive. To ensure you properly receive notifications, we will need to collect certain information about your device, such as operating system and user identification information. Every account is required to keep a valid email address on file to receive messages. Local Guru may also contact you by telephone to provide member support or for transaction-related purposes if you request that we call you. Additionally, and with your consent, Local Guru may send you an SMS (or similar) message in order to provide you with customer support or to provide you with information about products and features that you may find of interest. You may update your contact preferences in your account settings.</p>
      <p>Some messages from Local Guru are service-related and necessary for members and Guest Checkout users. You agree that Local Guru can send you non-marketing emails or messages, such as those related to transactions, your account, security, or product changes. Examples of service-related messages include an email address confirmation/welcome email when you register your account, notification of an order, service availability, modification of key features or functions, relaying Conversations with buyers, and correspondence with Local Guru&rsquo;s Support team.&nbsp;</p>
      <p>When you register for an account or provide us with your email address or phone number such as for a Guest Checkout purchase, you receive notice of and agree (in some jurisdictions and situations, by an additional unambiguous consent) to receive marketing emails and messages from us. You can unsubscribe at any time from marketing emails through the opt-out link included in marketing emails or messages. Please note that some changes to your account settings may take a few days to take effect.&nbsp;</p>
      <ol start="6">
      <li>Information Uses, Sharing, &amp; Disclosure</li>
      </ol>
      <p>When you access or use our service, we collect, use, share, and otherwise process your personal information as described in this policy. We rely on a number of legal bases to use your information in these ways. These legal bases include where:</p>
      <ul>
      <li>Necessary to perform the contractual obligations in our Terms of Use and in order to provide the Services to you;</li>
      <li>You have consented to the processing, which you can revoke at any time;</li>
      <li>Necessary to comply with a legal obligation, a court order, or to exercise or defend legal claims;&nbsp;</li>
      <li>Necessary for the purposes of our or a third party&rsquo;s legitimate interests, such as those of visitors, members, or partners;</li>
      <li>You have expressly made the information public;&nbsp;</li>
      <li>Necessary in the public interest; and</li>
      <li>Occasionally necessary to protect your vital interests or those of others.&nbsp;</li>
      <li>Note that we principally rely on consent (i) to send marketing messages, (ii) for third-party data sharing related to advertising, and, to the extent applicable, (iii) for the use of location data for advertising purposes.&nbsp;</li>
      </ul>
      <p>We rely on consent for targeted online and offline marketing including through tools like Facebook Custom Audience and Google Customer Match. We or our sellers may advertise our services or our sellers&rsquo; products through a variety of different mediums and rely on your consent to do so off-site. As part of this, we may work with advertising partners such as Facebook, Google, and other partners.&nbsp;</p>
      <p>Where we process your information on the basis of legitimate interests, we do so as follows:</p>
      <p><strong><em>Providing and Improving our Services:</em></strong>&nbsp;Local Guru may use or share your information to improve and customize our services and user experience. Using and sharing your information in a responsible manner is necessary to pursue our legitimate interests of improving our services for our users. This is also necessary to enable us to pursue our legitimate interests in understanding how our services are being used, and to explore and unlock ways to develop and grow our business. It allows us to pursue our legitimate interests in improving our services, efficiency, interest in services for users, and obtaining insights into usage patterns of our services.&nbsp;</p>
      <p><strong><em>Keeping our Services Safe and Secure:</em></strong>Local Guru may use or share your information for safety and security purposes. Using and sharing your information in a responsible manner is necessary to pursue our legitimate interests in ensuring the safety of our services. This includes enhancing protection of our community against spam, harassment, intellectual property infringement, crime, and security risks of all kind. We respect your privacy. Local Guru will not disclose your name, email address, or other personal information to third parties without your consent, except as specified in this policy.&nbsp;</p>
      <p>We use your information to provide and improve our services for billing and payments, for identification and authentication, and for general research and aggregate reporting. We may learn the sorts of products that you&rsquo;re interested in from your browsing and purchasing behavior on (and off) the Site and suggest potential purchases as a result. As a core part of our Services, we have a legitimate interest in customizing your on-site experience to help you search for and discover relevant items and recommended purchases. Please note that some changes to your privacy settings may take a few days to take effect. We or our sellers may advertise our Services or our sellers&rsquo; products through a variety of different mediums and rely on your consent to do so off-site. As part of this, we may work with advertising partners such as Facebook or Google, and we may use analytics aggregated from usage information including, for example, search keywords, favorites, browsing history, and purchase history. In addition to consent as noted above, we also rely on our legitimate interest to send you marketing messages and for Local Guru's advertising programs.</p>
      <p><strong><em>Buying and Selling</em></strong><em>:&nbsp;</em>Local Guru will facilitate the sharing of information between the two members involved in a buying and selling transaction. This may also involve us sharing your information with some of our third party partners such as our shipping and payment partners to enable us to provide the service to you. By making a sale or a purchase on Local Guru, you are directing us to share your information in this way. Since this is an important part of the Services we provide, we need to do this in order to perform our obligations under our Terms of Use. We expect you to respect the privacy of the member whose information you have received. As described in Local Guru's&nbsp;Terms of Use, you have a limited license to use that information only for Local Guru-facilitated transactions. Local Guru has not granted a license to you to use the information for unauthorized transactions or sending unsolicited commercial messages in violation of any applicable laws, including any consent requirements of the jurisdiction of the recipient. You may only add a member to your email or physical mailing list or otherwise use or store a member&rsquo;s personal information in accordance with applicable laws, including any consent requirements that apply in that member's jurisdiction.&nbsp;</p>
      <p><strong><em>Legal and Safety:</em></strong>&nbsp;Local Guru may also retain, preserve, or release your personal information to a third party in the following limited circumstances: in response to lawful requests by public authorities, including to meet legitimate national security or law enforcement requirements; to protect, establish, or exercise our legal rights or defend against legal claims, including to collect a debt; to comply with a subpoena, court order, legal process, or other legal requirement; or when we believe in good faith that such disclosure is reasonably necessary to comply with the law, prevent imminent physical harm or financial loss, or investigate, prevent, or take action regarding illegal activities, suspected fraud, threats to our property, or violations of Local Guru's&nbsp;Terms of Use. Local Guru&rsquo;s use of your information may be necessary for the purposes of our or a third party&rsquo;s legitimate interest in keeping our Services secure, preventing harm or crime, enforcing or defending legal rights, or preventing damage. Such use may also be necessary to comply with a legal obligation, a court order, or to exercise or defend legal claims. It may also be necessary in the public interest (such as to prevent crime) or to protect vital interests (in rare cases where we may need to share information to prevent loss of life or personal injury).</p>
      <p>If Local Guru receives a lawful, verified request for a member&rsquo;s records or information in one of the limited circumstances described in the previous paragraph, Local Guru may disclose personal information, which may include, but may not be limited to, a member&rsquo;s name, address, phone number, email address, and company name. Find out more about how Local Guru responds to requests for records or information about members of Local Guru&rsquo;s community in our&nbsp;Requests for Information Policy.</p>
      <p><strong><em>Affiliated Businesses:</em></strong>&nbsp;Local Guru is affiliated with a variety of businesses and works closely with them for a variety of purposes, including assisting us to perform and improve the Services. These businesses may sell items or services to you through the Services or, with your consent, offer promotions (including email promotions) to you. Local Guru may also provide services or sell products jointly with affiliated businesses, including providing information to such partners to allow them to more effectively market to you. When an affiliated business assists in facilitating your transaction, we may need to share information related to the transaction with that affiliated business in order to facilitate your transaction, and this forms part of the Services we provide in accordance with our Terms of Use. We rely on consent (which can be withdrawn at any time) to send marketing messages and for third-party sharing relating to advertising.&nbsp;</p>
      <p><em>Aggregated Information:</em>&nbsp;Local Guru may share demographic information with business partners, but it will be aggregated and de-personalized so that personal information is not revealed.</p>
      <p><strong><em>Service Providers:</em></strong>&nbsp;Local Guru also needs to engage third-party companies and individuals (such as payment processors, research companies, and analytics and security providers) to help us operate, provide, and market the Services. These third parties have only limited access to your information, may use your information only to perform these tasks on our behalf, and are obligated to Local Guru not to disclose or use your information for other purposes. Our engagement of service providers is often necessary for us to provide the Services to you, particularly where such companies play important roles like processing payments and shipments and helping us keep our Service operating and secure. In some other cases, these service providers aren&rsquo;t strictly necessary for us to provide the Services, but help us make it better, like by helping us conduct research into how we could better serve our users. In these latter cases, we have a legitimate interest in working with service providers to make our Services better.</p>
      <p><strong><em>Business Reorganization:</em></strong>&nbsp;In some cases, Local Guru may choose to buy or sell assets. Such transactions may be necessary and in our legitimate interests, particularly our interest in making decisions that enable our business to develop over the long term. In these types of transactions (such as a sale, merger, liquidation, receivership, or transfer of all or substantially all of Local Guru&rsquo;s assets), member information is typically one of the business assets that will be transferred. If Local Guru intends to transfer information about you, we will notify you by email or by putting a prominent notice on the Site, and you will be afforded an opportunity to opt out before information about you becomes subject to a different privacy policy.</p>
      <p><strong><em>Third Parties:</em></strong>&nbsp;Third-party plug-ins also may collect information about your use of the Site. For example, when you load a page on Local Guru that has a social plug-in from a third-party site or service, such as a &ldquo;Like&rdquo; or &ldquo;Send&rdquo; button, you are also loading content from that third-party site. That site may request cookies directly from your browser. These interactions are subject to the privacy policy of the third-party site. In addition, certain cookies and other similar technologies on the Site are used by third parties for targeted online marketing and other purposes. These technologies allow a partner to recognize your computer each time you use the Services. Please be aware that when you use third-party sites or services, their own terms and privacy policies will govern your use of those sites or services. Local Guru chooses and manages these third-party technologies placed on its Sites and Apps. However, these are third-party technologies, and they are subject to that third party's privacy policy. We rely on your consent to drop and read non-technically necessary cookies.&nbsp;</p>
      <p>We can speak only for ourselves; this policy does not apply to the practices of third parties (such as other members who sell using the Services, certain third-party providers on whom we rely to provide certain services, or API users) that Local Guru does not own or control or individuals that Local Guru does not employ or manage. If you provide your information to such third parties in connection with your use of the Services, different practices may apply to the use or disclosure of the information that you provide to them. While Local Guru requires these third parties to follow Local Guru&rsquo;s privacy and security requirements, Local Guru does not control the privacy or security policies of such third parties. To the full extent applicable in your jurisdiction, Local Guru is not responsible for the privacy or security practices of these sellers, API users, or other websites on the internet, even those linked to or from the Services. We encourage you to read the privacy policies and ask questions of third parties before you disclose your personal information to them.&nbsp;</p>
      <p><strong>Necessary for the Performance of the Contract between Local Guru and its Members</strong></p>
      <p>Local Guru provides a voluntary service; you can choose whether or not you want to use the Services. However, if you want to use the Services, you must agree to our&nbsp;Terms of Use, which set out the contract between Local Guru and its members. Simply put, we can&rsquo;t provide you with the Services and perform our contract with you without sharing your personal information with our partners.</p>
      <ol start="7">
      <li>Security</li>
      </ol>
      <p>We take the security of your personal information very seriously. We follow generally accepted standards to protect the personal information submitted to us, both during transmission and after it is received. Your account information is protected by a password. It is important that you protect against unauthorized access to your account and information by choosing your password carefully and by keeping your password and computer secure. Take precautions such as signing out after using our services, changing your password periodically and keeping your password private. If you have any questions about the security of your personal information, you can contact us at <strong>legal@LocalGuru.com.&nbsp;</strong></p>
      <p>Local Guru follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and after it is received. Unfortunately, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.&nbsp;</p>
      <ol start="8">
      <li>Retention</li>
      </ol>
      <p>Local Guru will retain your information only for as long as is necessary for the purposes set out in this policy, for as long as your account is active (i.e., for the lifetime of your Local Guru member account), as described in this policy, or as needed to provide the Services to you. If you no longer want Local Guru to use your information to provide the Services to you, you may close your account. Local Guru will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your information to comply with applicable tax/revenue laws), resolve disputes, enforce our agreements, and as otherwise described in this policy. Please note that closing your account may not free up your email address, username, or shop name (if any) for reuse on a new account. We also retain log files for internal analysis purposes. These log files are generally retained for a brief period of time, except in cases where they are used for site safety and security, to improve site functionality, or we are legally obligated to retain them for longer time periods. Local Guru does not retain any of your financial information.</p>
      <ol start="9">
      <li>Your Rights</li>
      </ol>
      <p>You may benefit from a number of rights in relation to your information that we process. Some rights apply only in certain limited cases, depending on your location. If you would like to manage, change, limit, or delete your personal information, you can do so via your Local Guru account settings or by contacting us. Upon request, Local Guru will provide you with information about whether we hold any of your personal information. By visiting your account settings, you can access, correct, change, and delete certain personal information associated with your account. In certain cases where we process your information, you may also have a right to restrict or limit the ways in which we use your personal information. In certain circumstances, you also have the right to request the deletion of your personal information, and to obtain a copy of your personal information in an easily accessible format. Please ensure you've read the options you have under the "Choice &amp; Control" section above. If you need further assistance, you can contact Local Guru through one of the channels listed below under &ldquo;Contact.&rdquo; We will respond to your request within a reasonable timeframe.</p>
      <p>If we process your information based on our legitimate interests as explained above, or in the public interest, you can object to this processing in certain circumstances. In such cases, we will cease processing your information unless we have compelling legitimate grounds to continue processing or where it is needed for legal reasons. Where we use your personal data for direct marketing purposes, you can always object using the unsubscribe link in such communications or changing your account settings. Please note that some changes to your account settings may take a few days to take effect.&nbsp;</p>
      <ol start="11">
      <li>Withdrawing Consent</li>
      </ol>
      <p>You can choose to withdraw your consent to our processing of your information and your use of the Services at any time by permanently closing and deleting your account through the Privacy tab of your account settings. If your account does not have any open issues such as unpaid bills, unfulfilled orders, unresolved cases, or policy violations, you will receive an email with instructions to confirm your deletion request. This process may take up to approximately two weeks after which your account will be deleted to the extent permitted. Depending on which of our Services you've used (such as whether you've made purchases or sales on Local Guru), we may be required to retain certain information for legal, regulatory, tax, security, or compliance reasons for a limited period of time, after which it will be deleted. This deletion is permanent, and your account cannot be reinstated.&nbsp;</p>
      <ol start="12">
      <li>Privacy Policy Changes</li>
      </ol>
      <p>We may amend or update this policy from time to time. If we believe that the changes are material, we&rsquo;ll let you know by doing one (or more) of the following: (i) posting the changes on or through the Services, (ii) sending you an email or message about the changes, or (iii) posting an update in the version notes on the Apps&rsquo; platform. We encourage you to check back regularly and review any updates.&nbsp;</p>
      <ol start="13">
      <li>Contact</li>
      </ol>
      <p>If you have any questions:&nbsp;</p>
      <p>Contact Local Guru&rsquo;s Support team&nbsp;at help@localguru.com</p>
      <p>Send an email to Local Guru's Data Protection Officer at dpo@LocalGuru.com</p>
      <p>Write to us at following address:</p>
      <p>Local Guru, LLC</p>
      <p>Insert Address</p>
      <p><strong>Requests for Information Policy</strong></p>
      <p>Local Guru aims to be a transparent and mindful company that is completely transparent with our users. This policy explains how we respond to requests for records or information about members of Local Guru&rsquo;s community.</p>
      <p>This policy does not constitute legal advice or a promise that Local Guru will respond in a specific way or at all. Local Guru reserves the right to deviate from these practices at any time. This policy is a part of our&nbsp;Terms of Use. By using Local Guru or requesting information on Local Guru or our members, you&rsquo;re agreeing to this policy and our Terms of Use.&nbsp;</p>
      <ol>
      <li>Member Records and Information<br />2. Local Guru Requires Valid Legal Process<br />3. How to Serve Local Guru with Legal Process to Request Access to Member Information<br />4. Emergency Circumstances (Danger of Death or Serious Injury)<br />5. Notice to the Member Whose Records Are Sought<br />6. Requests for Witness Testimony <br />7. Cost Reimbursement</li>
      <li><strong> Local Guru Member Records and Information</strong></li>
      </ol>
      <p>The information you are seeking may be publicly available. Before you contact Local Guru for records or information, check to see if the member information is publicly available or request the records directly from the relevant Local Guru member.</p>
      <p>Some information about Local Guru buyers and sellers (which we collectively refer to in this policy as &ldquo;Local Guru Members&rdquo;) is public and can be viewed by anyone at any time. In addition, Local Guru members may have access to certain records by logging in to their accounts].</p>
      <p>For more information about the records Local Guru collects, please see our&nbsp;Privacy Policy.&nbsp;</p>
      <ol start="2">
      <li><strong> Local Guru Requires Valid Legal Process</strong></li>
      </ol>
      <p>Except in emergency situations or when consistent with our&nbsp;Terms of Use,&nbsp;Privacy Policy, and applicable law, Local Guru requires valid and sufficient legal process to compel us to disclose records or information about an Local Guru member.&nbsp;</p>
      <p>Legal process must contain enough identifying information so that Local Guru can identify the member&rsquo;s account. Your legal process should include information such as an email address, transaction ID, username, or payment information.</p>
      <ol start="3">
      <li><strong> Serving Local Guru with Legal Process to Request Access to Member Information</strong></li>
      </ol>
      <p>All requests for member information must be made with valid and sufficient process. We may be able to expedite our review of your request if, in addition to providing us with proper legal service, you email a copy to <strong>legal@LocalGuru.com</strong> (indicating, in the subject line, whether the request is directed to Local Guru, Inc.</p>
      <p>Receipt of legal process by these means is for Local Guru&rsquo;s convenience only and does not waive any objections, including lack of jurisdiction, subpoena power, or improper service.</p>
      <p>As a US-based company, Local Guru may require that non-US legal process be domesticated under a Mutual Legal Assistance Treaty (&ldquo;MLAT&rdquo;), letters rogatory, or section 1782 of the US code, as appropriate.&nbsp;</p>
      <ol start="4">
      <li><strong> Emergency Circumstances (Danger of Death or Serious Injury)</strong></li>
      </ol>
      <p>If your request for information involves an emergency regarding a danger of death or serious physical injury to a member of the Local Guru community or any member of the public, please contact your local law enforcement. If you are a law enforcement officer seeking information relating to such an emergency, please email&nbsp;<strong>legal@Local Guru.com</strong>&nbsp;from your official email address and provide the following:</p>
      <ol>
      <li>Your name and title, the government agency you work for, and your full contact information (government email address, phone number, and fax number);</li>
      <li>A summary of the facts about the emergency situation, including how the situation poses a danger of death or serious physical injury to an Local Guru member or any person;</li>
      <li>The identity of the person or people who are in danger;</li>
      <li>The specific records sought and how they relate to the emergency; and</li>
      <li>Why legal process cannot be obtained and the records must be disclosed without delay.</li>
      </ol>
      <ol start="5">
      <li><strong> Notice to the Member Whose Records Are Sought</strong></li>
      </ol>
      <p>When our company receives legal process seeking records or information about one of our members, Local Guru may provide notice to that member, including a copy of the legal process. Local Guru may also allow the member enough time to appear and object to the legal process in court, if necessary.&nbsp;</p>
      <ol start="6">
      <li><strong> Requests for Witness Testimony</strong></li>
      </ol>
      <p>Local Guru does not provide expert witnesses for trial or deposition. When Local Guru produces records, we provide a standard records custodian declaration of authenticity. The records are self-authenticating and thus live testimony is unnecessary.</p>
      <ol start="7">
      <li><strong> Cost Reimbursement</strong></li>
      </ol>
      <p>Local Guru may seek reimbursement for our costs directly incurred in searching for, assembling, collecting, and preparing records or information for production.</p>
      <p><br /><br /></p>

      <h2>Seller Policy</h2>
      <p>Local Guru is a marketplace where local producers can connect with the community around them and share locally made goods with local consumers. We want to make sure that you and your buyers have a positive experience on Local Guru. Please read on to find out more about your rights, as well as what is expected of you, as a seller.</p>
      <p>This policy is a part of our&nbsp;Terms of Use. By opening a Local Guru shop, you&rsquo;re agreeing to this policy and our Terms of Use.</p>
      <ol>
      <li>What Can be Sold on Local Guru</li>
      <li>What Cannot be Sold on Local Guru</li>
      <li>Representing Yourself, Your Shop, and Your Listings Honestly</li>
      <li>Privacy</li>
      <li>Building a Positive Reputation Through our Reviews System</li>
      <li>Cancellations and Local Guru&rsquo;s Case Sytem</li>
      <li>Open House</li>
      </ol>
      <ol>
      <li><strong> What Can be Sold on Local Guru</strong></li>
      </ol>
      <p>Local Guru is market place for locally sourced and organic homemade goods. Buyers come here to purchase homemade and locally sourced goods from the community around them. Everything listed for sale on Local Guru must be grown or made by the seller.</p>
      <ol start="2">
      <li><strong> What Can't be Sold on Local Guru</strong></li>
      </ol>
      <p>Even if they otherwise meet our marketplace criteria,&nbsp;prohibited items,&nbsp;services, and&nbsp;items that violate our intellectual property policies&nbsp;are not allowed to be sold on Local Guru.</p>
      <p>Sellers may not resell store bought items. All items must be grown or made by the seller.</p>
      <ol start="3">
      <li><strong> Representing Yourself, Your Shop, and Your Listings Honestly</strong></li>
      </ol>
      <p>At Local Guru, we value transparency. Transparency means that you honestly and accurately represent yourself, your items, and your business.</p>
      <p>By selling on Local Guru, you agree that you will:</p>
      <ol>
      <li>Provide honest, accurate information in your About Section.</li>
      <li>Honor your&nbsp;Local Guru Policies.</li>
      <li>Accurately represent your items in&nbsp;listings.</li>
      <li>Respect the&nbsp;intellectual property&nbsp;of others. If you feel someone has violated your intellectual property rights,&nbsp;you can report it to Local Guru.</li>
      <li>Not create duplicate pages for the purpose of manipulating search.</li>
      <li>Not coordinate pricing with other sellers.</li>
      </ol>
      <ol start="4">
      <li><strong> Privacy</strong></li>
      </ol>
      <p><strong>Privacy and Protecting Personal Information</strong></p>
      <p>You are responsible for protecting members&rsquo; personal information you receive or process, and you must comply with all relevant legal requirements. This includes applicable data protection and privacy laws that govern the ways in which you can use Local Guru user information. These laws may require that you post and comply with your own privacy policy, which must be accessible to Local Guru users with whom you interact. Your privacy policy must be compatible with this policy and Local Guru&rsquo;s Terms of Use.</p>
      <p>For more information, please see our&nbsp;Privacy Policy.</p>
      <ol start="5">
      <li><strong> Building a Positive Reputation Through our Reviews System</strong></li>
      </ol>
      <p>Reviews are a great way for you to build a reputation on Local Guru. Buyers can leave a&nbsp;review, including a one to five star rating within 100 days after their item&rsquo;s estimated delivery date.&nbsp;</p>
      <p>On the rare occasion you receive an unfavorable review, you can reach out to the buyer or, if the review is less than 3 stars, leave a response.</p>
      <p>Reviews and your response to reviews may not:</p>
      <ol>
      <li>Contain&nbsp;private information;</li>
      <li>Contain obscene, racist, or harassing language or imagery;</li>
      <li>Violate our&nbsp;Anti-Discrimination Policy;</li>
      <li>Contain prohibited medical drug claims;</li>
      <li>Contain advertising or spam;</li>
      <li>Be about things outside the seller&rsquo;s control, such as a shipping carrier, Local Guru or a third party;</li>
      <li>Contain threats or&nbsp;extortion;</li>
      <li>Include&nbsp;shilling&nbsp;or otherwise falsely inflate a shop&rsquo;s review score; or</li>
      <li>Undermine the integrity of the Reviews system.</li>
      </ol>
      <p>We expect our sellers to provide a high level of customer service. By selling on Local Guru, you agree to:</p>
      <ol>
      <li>Provide buyers with quality goods that are sold as represented on your page. Local Guru is not responsible for any goods sold to a buyer that do not reflect the description (size, weight, quality&hellip;etc.) on a seller&rsquo;s page.&nbsp;</li>
      <li>Honor your processing times. Sellers are obligated to work with Local Guru to process orders and provide Local Guru with all ordered items in a prompt manner, unless there is an exceptional circumstance.&nbsp;</li>
      <li>Respond to any messages in a timely manner.</li>
      <li>Honor the commitments or representations you make on your page.</li>
      <li>Resolve disagreements or disputes directly with the buyer. In the unlikely event that you can&rsquo;t reach a resolution, our Dispute Resolution team can help through our case system.&nbsp;</li>
      <li>If you are unable to complete an order, you must notify the buyer and cancel the order.&nbsp;</li>
      <li>As a seller, you must provide great customer service and maintain trust with your buyers.</li>
      <li>Responding to Requests for Cancellations, Returns, and Exchanges</li>
      </ol>
      <ol start="6">
      <li><strong> Cancellations &amp; Local Guru&rsquo;s Case System</strong></li>
      </ol>
      <p>If you are unable to complete a transaction, you must notify the buyer and cancel the transaction. If the buyer already submitted payment, you must issue a full refund. You are encouraged to keep proof of any refunds in the event a dispute arises.&nbsp;</p>
      <p>We ask buyers to contact sellers directly and attempt to resolve any outstanding issues before opening a case on Local Guru. For this reason, it is important that you fill out your shop policies and regularly respond to messages from your buyers.</p>
      <p>Buyers may file a case for a not-as-described item. You must respond to any open cases within three days or the time frame noted by Local Guru in the case. Local Guru may request your assistance in resolving a case opened against your shop. Local Guru reserves the right to escalate a case early for circumstances such as seller inactivity, harassment, refusal of service, case manipulation, and undermining the integrity of the case system.</p>
      <p>By using Local Guru&rsquo;s case system, you understand that Local Guru may use your personal information for the purpose of resolving disputes with other members. Cases can be filed in the following circumstances:</p>
      <ul>
      <li><strong><strong>Not as Described</strong></strong></li>
      </ul>
      <p>An item is&nbsp;not as described&nbsp;if the buyer can demonstrate that it is significantly different from your listing description.&nbsp;</p>
      <ul>
      <li><strong><strong>Ineligible Transactions: </strong>Some disputes don&rsquo;t qualify for Local Guru&rsquo;s case system. These include:</strong></li>
      </ul>
      <ul>
      <li>Items that are damaged by the shipping carrier (if properly packaged by the seller).</li>
      </ul>
      <ul>
      <li>Items that are received after the agreed-upon delivery date due to shipping delays.</li>
      </ul>
      <ul>
      <li>Items that are returned without a return agreement.</li>
      </ul>
      <ul>
      <li>Items that are accurately described but don&rsquo;t meet a buyer's expectations.</li>
      </ul>
      <ul>
      <li>Items that are purchased in person.</li>
      </ul>
      <ul>
      <li>Items&nbsp;prohibited from sale on Local Guru, including services and intangible goods.</li>
      </ul>
      <ul>
      <li>Transactions where payment is not made via Local Guru&rsquo;s checkout system.</li>
      </ul>
      <p>When a dispute is ineligible for our case system, we encourage both parties to work together to come to an amicable solution.</p>
      <ol start="7">
      <li><strong>Open House</strong></li>
      </ol>
      <p>Once per month all sellers must host an &ldquo;open house&rdquo; and allow buyers and prospective buyers to see your merchandise before they buy. The open house allows for sellers and buyers to establish a connection and fuels trust between the parties. Buyers get a chance to see not only what they are buying but also the environment they are buying from. Open house also provides sellers with an opportunity to highlight products and market their goods in a new way.</p>
      <p>As stated above Local Guru is not responsible for any goods sold to a buyer that do not reflect the description (size, weight, quality&hellip;etc.) on a seller&rsquo;s page. Open House is a great way to show potential buyers exactly what they are buying and avoid confusion or disappointment after a sell.</p>
      <p><strong>Privacy Policy</strong></p>
      <p>At Local Guru, we value your privacy rights. We believe committed to being transparent about our privacy practices, including how we treat your personal information. We provide you with the opportunity to choose how Local Guru uses certain information. This policy explains our privacy practices for localguru.com (which we&rsquo;ll refer to as the "Site"), We'll refer to the Site, and our other services as the "Services." This policy does not apply to the practices of third parties (including other members who sell using the Services or API users) who may also collect or receive data in connection with your use of the Services.</p>
      <ol>
      <li>Accepting the Privacy Policy</li>
      <li>Information Collected or Received</li>
      <li>Use of Cookies</li>
      <li>Choice &amp; Control</li>
      <li>Findability</li>
      <li>Messages from Local Guru</li>
      <li>Security</li>
      <li>Retention</li>
      <li>Your Rights</li>
      <li>Your Responsibilities</li>
      <li>Withdrawing Consent</li>
      <li>Privacy Policy Changes</li>
      <li>Contact</li>
      </ol>
      <ol>
      <li><strong> Accepting the Privacy Policy</strong></li>
      </ol>
      <p>In order to provide you with services and run our business we need to process your personal information. By accepting our&nbsp;Terms of Use, you are confirming that you have read and understand this policy, including how and why we use your information. <strong>If you are uncomfortable with Local Guru collecting or processing your personal information in the ways described in this policy, you shouldn&rsquo;t use the Services.</strong> We are not responsible for the content or the privacy policies or practices of any of our members, third-party websites, or third-party apps.</p>
      <p>Under our Terms of Use&nbsp;all account owners must be at least 18 years of age. Minors under 18 years of age and at least 13 years of age are permitted to use Local Guru Services only if they have the appropriate permission and direct supervision by the owner of the account. Children under age 13 are not permitted to use Local Guru or the Services. You are responsible for any and all account activity conducted by a minor on your account.</p>
      <p>By using the Services, you acknowledge that Local Guru will use your information in the United States, and any other country where Local Guru may operate. Please be aware that the privacy laws and standards in certain countries, including the rights of authorities to access your personal information, may differ from those that apply in the country in which you reside. We will transfer personal information only to those countries to which we are permitted by law to transfer personal information, and we will take steps to ensure that your personal information continues to enjoy appropriate protections.</p>
      <ol start="2">
      <li><strong> Information Collected or Received</strong></li>
      </ol>
      <p>In the course of providing our Services, we collect or receive your personal information in a few different ways. Often, you choose what information to provide, but some information is required for you to use and for us to provide you the Services.</p>
      <p><em>Registration, Account Setup, Service Usage:</em>&nbsp;In order to use the Services, you need to provide us with a valid email address, a name associated with your account that you can choose to represent your identity on Local Guru. You need to provide this information to enable us to provide you with the Services. Depending on which services you choose to use, additional information, such as billing and payment information (including billing contact name, address, telephone number, credit card information), a telephone number, and/or a physical postal address, may be necessary in order for us to provide a particular service. You are not required to provide us with this information to sign up, but we will need it to provide certain services. As a Local Guru seller, Local Guru may require information such as your full name, social security number, identification ID or tax ID, date of birth, bank account information, credit card information, and/or other proof of identification in order to verify your identity, provide this service to you, and comply with applicable law. Local Guru may contact individual sellers confidentially to request more information about their shops or items listed through the Services, or to ensure compliance with our rules and applicable law. In order to use certain products or services on Local Guru, you may be required to complete an application; information that you submit through the application processes will not be displayed publicly and will only be used internally by Local Guru, unless otherwise specified.</p>
      <p><strong><em>Profile</em></strong><em>:</em>&nbsp;You may provide your name and other personal information (such as birthday, gender, location) in connection with your account and activity.&nbsp;</p>
      <p>The name associated with your account is publicly displayed and connected to your Local Guru activity. Other people may see the date you joined; ratings, and reviews for items you sold; your profile information; items you listed for sale.</p>
      <p><strong><em>Automated Information</em></strong><em>:</em>&nbsp;Local Guru automatically receives and records information from your browser or your mobile device when you visit the Site or use the Apps or use certain other Services, such as your IP address or unique device identifier, cookies, and data about which pages you visit in order to allow us to operate and provide the Services. This information is collected automatically and stored in log files. This information may be combined with information from your browser or your mobile device with other information that we or our partners collect about you, including across devices. We use this information to prevent fraud and to keep our services secure. We also use it to analyze and understand how our services work for members and visitors, and provide advertising and a more personalized experience for members and visitors.</p>
      <p>We may also automatically collect device-specific information when you access, or use our Services. This information may include information such as the hardware model, operating system information, app version, app usage and debugging information, browser information, IP address, and device identifiers.&nbsp;</p>
      <p><strong><em>Location Information</em></strong><em>:</em>&nbsp;We may collect information about your use of the Services for advertising, for analytics, to serve content, and to protect our services. This may include your IP address, browser information (including referrers), and device information. You may choose to publish your location when you sell on Local Guru.&nbsp;</p>
      <p>We may obtain location information you provide in your profile or your IP address. With your consent, we may also determine location by using other information from your device. We may use and store information about your location to provide features and to improve and customize the Services. Certain non-precise location services, such as for security and localized policies based on your IP address or submitted address, are critical for the site to function. We will only share your geolocation details with third parties (like our mapping, payments, or, to the extent applicable, advertising providers) in order to provide you with the Services.&nbsp;</p>
      <p><strong><em>Analytics Information:</em></strong>&nbsp;We use data analytics to ensure site functionality and improve our services for our users. We do not link the information we store within the analytics software to any personally identifiable information that you submit.</p>
      <p><strong><em>Non-Member Information:</em></strong>&nbsp;Local Guru may receive or obtain information (for example, an email address or IP address) about a person who is not yet a registered Local Guru member (a &ldquo;non-member&rdquo;) in connection with certain Local Guru features, a member invites a non-member to visit the Site, a non-member engages in a transaction, or a non-member uses the Guest Checkout feature when making a purchase through our services. Non-member information is used only for the purposes disclosed when it was submitted to Local Guru or to facilitate action authorized by the non-member.</p>
      <ol start="3">
      <li>Use of Cookies</li>
      </ol>
      <p>Like most websites, Local Guru uses cookies. Cookies are small pieces of information that are stored on your computer. They are designed to record your browsing history, log in information, and your web surfing history. Personal information is not collected by cookies, however, if you previously provided personal information then cookies may be linked to this information.</p>
      <p>In some cases, we use third-party advertising companies to show you ads when you visit our website. These companies may use your stored cookies to provide you advertisements about goods and services that are of an interest to you.</p>
      <p>You can disable the use of cookies by changing the setting in your web browser.</p>
      <ol start="4">
      <li>Choice &amp; Control</li>
      </ol>
      <p>Local Guru understands that our members value having control over their own information, so we give you the choice of providing, editing, or removing certain information, as well as choices about how we contact you. You may change or correct your Local Guru account information through your account settings. You may also remove certain optional information that you no longer wish to be publicly visible through the Services, such as your name. You can also request the deletion of the personal information in your account. We use non-technically necessary and similar technologies.&nbsp;</p>
      <p>You may also control the receipt of certain types of communications from Local Guru in your account settings. Local Guru may send you messages about the Services or your activity. Some of these messages are required, service-related messages for members (such as transactional messages or legal notices). Other messages are not required, such as newsletters. You can control which optional messages you choose to receive by changing your account settings, and you can learn more in the &ldquo;Messages from Local Guru&rdquo; section of this policy.</p>
      <p>We partner with third parties to manage our advertising on other sites. Our third-party partners may use cookies or similar technologies in order to provide you with advertising based upon your browsing activities and interests. If you have chosen to connect your account to an external third-party application, such as Facebook, or an app developed using the API, you can change your settings and remove permission for the app by changing your account settings.</p>
      <p>If you no longer wish to use our services or receive service-related messages (except for legally required notices), then you may close your account.&nbsp;</p>
      <ol start="5">
      <li>Messages from Local Guru</li>
      </ol>
      <p>From time to time we may need to contact you. Primarily, these messages are delivered by email for a variety of reasons, including marketing, transactions, and service update purposes. You can opt out of receiving marketing communications via email in your account settings or by following the unsubscribe link in any marketing email you receive. To ensure you properly receive notifications, we will need to collect certain information about your device, such as operating system and user identification information. Every account is required to keep a valid email address on file to receive messages. Local Guru may also contact you by telephone to provide member support or for transaction-related purposes if you request that we call you. Additionally, and with your consent, Local Guru may send you an SMS (or similar) message in order to provide you with customer support or to provide you with information about products and features that you may find of interest. You may update your contact preferences in your account settings.</p>
      <p>Some messages from Local Guru are service-related and necessary for members and Guest Checkout users. You agree that Local Guru can send you non-marketing emails or messages, such as those related to transactions, your account, security, or product changes. Examples of service-related messages include an email address confirmation/welcome email when you register your account, notification of an order, service availability, modification of key features or functions, relaying Conversations with buyers, and correspondence with Local Guru&rsquo;s Support team.&nbsp;</p>
      <p>When you register for an account or provide us with your email address or phone number such as for a Guest Checkout purchase, you receive notice of and agree (in some jurisdictions and situations, by an additional unambiguous consent) to receive marketing emails and messages from us. You can unsubscribe at any time from marketing emails through the opt-out link included in marketing emails or messages. Please note that some changes to your account settings may take a few days to take effect.&nbsp;</p>
      <ol start="6">
      <li>Information Uses, Sharing, &amp; Disclosure</li>
      </ol>
      <p>When you access or use our service, we collect, use, share, and otherwise process your personal information as described in this policy. We rely on a number of legal bases to use your information in these ways. These legal bases include where:</p>
      <ul>
      <li>Necessary to perform the contractual obligations in our Terms of Use and in order to provide the Services to you;</li>
      <li>You have consented to the processing, which you can revoke at any time;</li>
      <li>Necessary to comply with a legal obligation, a court order, or to exercise or defend legal claims;&nbsp;</li>
      <li>Necessary for the purposes of our or a third party&rsquo;s legitimate interests, such as those of visitors, members, or partners;</li>
      <li>You have expressly made the information public;&nbsp;</li>
      <li>Necessary in the public interest; and</li>
      <li>Occasionally necessary to protect your vital interests or those of others.&nbsp;</li>
      <li>Note that we principally rely on consent (i) to send marketing messages, (ii) for third-party data sharing related to advertising, and, to the extent applicable, (iii) for the use of location data for advertising purposes.&nbsp;</li>
      </ul>
      <p>We rely on consent for targeted online and offline marketing including through tools like Facebook Custom Audience and Google Customer Match. We or our sellers may advertise our services or our sellers&rsquo; products through a variety of different mediums and rely on your consent to do so off-site. As part of this, we may work with advertising partners such as Facebook, Google, and other partners.&nbsp;</p>
      <p>Where we process your information on the basis of legitimate interests, we do so as follows:</p>
      <p><strong><em>Providing and Improving our Services:</em></strong>&nbsp;Local guru may use or share your information to improve and customize our services and user experience. Using and sharing your information in a responsible manner is necessary to pursue our legitimate interests of improving our services for our users. This is also necessary to enable us to pursue our legitimate interests in understanding how our services are being used, and to explore and unlock ways to develop and grow our business. It allows us to pursue our legitimate interests in improving our services, efficiency, interest in services for users, and obtaining insights into usage patterns of our services.&nbsp;</p>
      <p><strong><em>Keeping our Services Safe and Secure:</em></strong>Local Guru may use or share your information for safety and security purposes. Using and sharing your information in a responsible manner is necessary to pursue our legitimate interests in ensuring the safety of our services. This includes enhancing protection of our community against spam, harassment, intellectual property infringement, crime, and security risks of all kind. We respect your privacy. Local Guru will not disclose your name, email address, or other personal information to third parties without your consent, except as specified in this policy.&nbsp;</p>
      <p>We use your information to provide and improve our services for billing and payments, for identification and authentication, and for general research and aggregate reporting. We may learn the sorts of products that you&rsquo;re interested in from your browsing and purchasing behavior on (and off) the Site and suggest potential purchases as a result. As a core part of our Services, we have a legitimate interest in customizing your on-site experience to help you search for and discover relevant items and recommended purchases, including using this information to help sellers find the best ways to market and sell their products on Local Guru. You may control your privacy settings through the opt-out buttons in your account settings privacy tab. Please note that some changes to your privacy settings may take a few days to take effect. We or our sellers may advertise our Services or our sellers&rsquo; products through a variety of different mediums and rely on your consent to do so off-site. As part of this, we may work with advertising partners such as Facebook or Google, and we may use analytics aggregated from usage information including, for example, search keywords, favorites, browsing history, and purchase history. In addition to consent as noted above, we also rely on our legitimate interest to send you marketing messages and for Local Guru's advertising programs.</p>
      <p><strong><em>Buying and Selling</em></strong><em>:&nbsp;</em>Local Guru will facilitate the sharing of information between the two members involved in a buying and selling transaction. This may also involve us sharing your information with some of our third party partners such as our shipping and payment partners to enable us to provide the service to you. By making a sale or a purchase on Local Guru, you are directing us to share your information in this way. Since this is an important part of the Services we provide, we need to do this in order to perform our obligations under our Terms of Use. We expect you to respect the privacy of the member whose information you have received. As described in Local Guru's&nbsp;Terms of Use, you have a limited license to use that information only for Local Guru-facilitated transactions. Local Guru has not granted a license to you to use the information for unauthorized transactions or sending unsolicited commercial messages in violation of any applicable laws, including any consent requirements of the jurisdiction of the recipient. You may only add a member to your email or physical mailing list or otherwise use or store a member&rsquo;s personal information in accordance with applicable laws, including any consent requirements that apply in that member's jurisdiction.&nbsp;</p>
      <p><strong><em>Legal and Safety:</em></strong>&nbsp;Local Guru may also retain, preserve, or release your personal information to a third party in the following limited circumstances: in response to lawful requests by public authorities, including to meet legitimate national security or law enforcement requirements; to protect, establish, or exercise our legal rights or defend against legal claims, including to collect a debt; to comply with a subpoena, court order, legal process, or other legal requirement; or when we believe in good faith that such disclosure is reasonably necessary to comply with the law, prevent imminent physical harm or financial loss, or investigate, prevent, or take action regarding illegal activities, suspected fraud, threats to our property, or violations of Local Guru's&nbsp;Terms of Use. Local Guru&rsquo;s use of your information may be necessary for the purposes of our or a third party&rsquo;s legitimate interest in keeping our Services secure, preventing harm or crime, enforcing or defending legal rights, or preventing damage. Such use may also be necessary to comply with a legal obligation, a court order, or to exercise or defend legal claims. It may also be necessary in the public interest (such as to prevent crime) or to protect vital interests (in rare cases where we may need to share information to prevent loss of life or personal injury).</p>
      <p>If Local Guru receives a lawful, verified request for a member&rsquo;s records or information in one of the limited circumstances described in the previous paragraph, Local Guru may disclose personal information, which may include, but may not be limited to, a member&rsquo;s name, address, phone number, email address, and company name. Find out more about how Local Guru responds to requests for records or information about members of Local Guru&rsquo;s community in our&nbsp;Requests for Information Policy.</p>
      <p><strong><em>Affiliated Businesses:</em></strong>&nbsp;Local Guru is affiliated with a variety of businesses and works closely with them for a variety of purposes, including assisting us to perform and improve the Services. These businesses may sell items or services to you through the Services or, with your consent, offer promotions (including email promotions) to you. Local Guru may also provide services or sell products jointly with affiliated businesses, including providing information to such partners to allow them to more effectively market to you. When an affiliated business assists in facilitating your transaction, we may need to share information related to the transaction with that affiliated business in order to facilitate your transaction, and this forms part of the Services we provide in accordance with our Terms of Use. We rely on consent (which can be withdrawn at any time) to send marketing messages and for third-party sharing relating to advertising.&nbsp;</p>
      <p><em>Aggregated Information:</em>&nbsp;Local Guru may share demographic information with business partners, but it will be aggregated and de-personalized so that personal information is not revealed.</p>
      <p><strong><em>Service Providers:</em></strong>&nbsp;Local Guru also needs to engage third-party companies and individuals (such as payment processors, research companies, and analytics and security providers) to help us operate, provide, and market the Services. These third parties have only limited access to your information, may use your information only to perform these tasks on our behalf, and are obligated to Local Guru not to disclose or use your information for other purposes. Our engagement of service providers is often necessary for us to provide the Services to you, particularly where such companies play important roles like processing payments and shipments and helping us keep our Service operating and secure. In some other cases, these service providers aren&rsquo;t strictly necessary for us to provide the Services, but help us make it better, like by helping us conduct research into how we could better serve our users. In these latter cases, we have a legitimate interest in working with service providers to make our Services better.</p>
      <p><strong><em>Business Reorganization:</em></strong>&nbsp;In some cases, Local Guru may choose to buy or sell assets. Such transactions may be necessary and in our legitimate interests, particularly our interest in making decisions that enable our business to develop over the long term. In these types of transactions (such as a sale, merger, liquidation, receivership, or transfer of all or substantially all of Local Guru&rsquo;s assets), member information is typically one of the business assets that will be transferred. If Local Guru intends to transfer information about you, we will notify you by email or by putting a prominent notice on the Site, and you will be afforded an opportunity to opt out before information about you becomes subject to a different privacy policy.</p>
      <p><strong><em>Third Parties:</em></strong>&nbsp;Third-party plug-ins also may collect information about your use of the Site. For example, when you load a page on Local Guru that has a social plug-in from a third-party site or service, such as a &ldquo;Like&rdquo; or &ldquo;Send&rdquo; button, you are also loading content from that third-party site. That site may request cookies directly from your browser. These interactions are subject to the privacy policy of the third-party site. In addition, certain cookies and other similar technologies on the Site are used by third parties for targeted online marketing and other purposes. These technologies allow a partner to recognize your computer each time you use the Services. Please be aware that when you use third-party sites or services, their own terms and privacy policies will govern your use of those sites or services. Local Guru chooses and manages these third-party technologies placed on its Sites and Apps. However, these are third-party technologies, and they are subject to that third party's privacy policy. We rely on your consent to drop and read non-technically necessary cookies.&nbsp;</p>
      <p>We can speak only for ourselves; this policy does not apply to the practices of third parties (such as other members who sell using the Services, certain third-party providers on whom we rely to provide certain services, or API users) that Local Guru does not own or control or individuals that Local Guru does not employ or manage. If you provide your information to such third parties in connection with your use of the Services, different practices may apply to the use or disclosure of the information that you provide to them. While Local Guru requires these third parties to follow Local Guru&rsquo;s privacy and security requirements, Local Guru does not control the privacy or security policies of such third parties. To the full extent applicable in your jurisdiction, Local Guru is not responsible for the privacy or security practices of these sellers, API users, or other websites on the internet, even those linked to or from the Services. We encourage you to read the privacy policies and ask questions of third parties before you disclose your personal information to them. For the purposes of European law, these sellers, third party providers, and API users are independent controllers of data, which means that they are responsible for providing and complying with their own policies relating to any personal information they obtain in connection with the Services.&nbsp;</p>
      <p><strong>Necessary for the Performance of the Contract between Local Guru and its Members</strong></p>
      <p>Local Guru provides a voluntary service; you can choose whether or not you want to use the Services. However, if you want to use the Services, you must agree to our&nbsp;Terms of Use, which set out the contract between Local Guru and its members. Simply put, we can&rsquo;t provide you with the Services and perform our contract with you without sharing your personal information with our partners.</p>
      <ol start="7">
      <li>Security</li>
      </ol>
      <p>We take the security of your personal information very seriously. We follow generally accepted standards to protect the personal information submitted to us, both during transmission and after it is received. Your account information is protected by a password. It is important that you protect against unauthorized access to your account and information by choosing your password carefully and by keeping your password and computer secure. Take precautions such as signingas signing out after using our services, changing your password periodically and keep your password private. If you have any questions about the security of your personal information, you can contact us at <strong>legal@LocalGuru.com.&nbsp;</strong></p>
      <p>Local Guru follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and after it is received. Unfortunately, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.&nbsp;</p>
      <ol start="8">
      <li>Retention</li>
      </ol>
      <p>Local Guru will retain your information only for as long as is necessary for the purposes set out in this policy, for as long as your account is active (i.e., for the lifetime of your Local Guru member account), as described in this policy, or as needed to provide the Services to you. If you no longer want Local Guru to use your information to provide the Services to you, you may close your account. Local Guru will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your information to comply with applicable tax/revenue laws), resolve disputes, enforce our agreements, and as otherwise described in this policy. In addition, Local Guru sellers may also be required to retain and use your information in order to comply with their own legal obligations. Please note that closing your account may not free up your email address, username, or shop name (if any) for reuse on a new account. We also retain log files for internal analysis purposes. These log files are generally retained for a brief period of time, except in cases where they are used for site safety and security, to improve site functionality, or we are legally obligated to retain them for longer time periods. Local Guru does not retain any of your financial information.</p>
      <ol start="9">
      <li>Your Rights</li>
      </ol>
      <p>You may benefit from a number of rights in relation to your information that we process. Some rights apply only in certain limited cases, depending on your location. If you would like to manage, change, limit, or delete your personal information, you can do so via your Local Guru account settings or by contacting us. Upon request, Local Guru will provide you with information about whether we hold any of your personal information. By visiting your account settings, you can access, correct, change, and delete certain personal information associated with your account. In certain cases where we process your information, you may also have a right to restrict or limit the ways in which we use your personal information. In certain circumstances, you also have the right to request the deletion of your personal information, and to obtain a copy of your personal information in an easily accessible format. Please ensure you've read the options you have under the "Choice &amp; Control" section above. If you need further assistance, you can contact Local Guru through one of the channels listed below under &ldquo;Contact.&rdquo; We will respond to your request within a reasonable timeframe.</p>
      <p>If we process your information based on our legitimate interests as explained above, or in the public interest, you can object to this processing in certain circumstances. In such cases, we will cease processing your information unless we have compelling legitimate grounds to continue processing or where it is needed for legal reasons. Where we use your personal data for direct marketing purposes, you can always object using the unsubscribe link in such communications or changing your account settings. Please note that some changes to your account settings may take a few days to take effect.&nbsp;</p>
      <ol start="10">
      <li>Your Responsibilities</li>
      </ol>
      <p>If you sell using our Services or use Local Guru&rsquo;s API, you may receive and determine what to do with certain personal information, such as when communicating with users and entering into transactions with buyers. This means you process personal information (for example, buyer name, email address, and shipping address).</p>
      <p>You are responsible for protecting user personal information you receive or process and complying with all relevant legal requirements when you use the Services. This includes applicable data protection and privacy laws that govern the ways in which you can use a user&rsquo;s information. Such laws may require that you post, and comply with, your own privacy policy, which must be accessible to Local Guru users you interact with and compatible with this policy and Local Guru&rsquo;s Terms of Use.&nbsp;</p>
      <p>As a data controller, to the extent that you process user personal information outside of the Services, you may be required under applicable data protection and privacy laws to honor requests received from such users for data access, portability, correction, deletion, and objections to processing. Also, if you disclose personal information without the buyer&rsquo;s proper consent, you are responsible for that unauthorized disclosure. This includes, for example, disclosures you make or unintentional data breaches. For example, you may receive a buyer&rsquo;s email address or other information as a result of entering into a transaction with that buyer. This information may only be used for Local Guru-related communications or for Local Guru-facilitated transactions. You may not use this information for unsolicited commercial messages or unauthorized transactions. Without the buyer&rsquo;s consent, and subject to other applicable Local Guru policies and laws, you may not add any Local Guru member to your email or physical mailing list, use that buyer&rsquo;s identity for marketing, or obtain or retain any payment information. Please bear in mind that you're responsible for knowing the standard of consent required in any given instance.</p>
      <p>If Local Guru and you are found to be joint data controllers of personal information, and if Local Guru is sued, fined, or otherwise incurs expenses because of something that you did in your capacity as a joint data controller of buyer personal information, you agree to indemnify Local Guru for the expenses it occurs in connection with your processing of buyer personal information.&nbsp;</p>
      <ol start="11">
      <li>Withdrawing Consent</li>
      </ol>
      <p>You can choose to withdraw your consent to our processing of your information and your use of the Services at any time by permanently closing and deleting your account through the Privacy tab of your account settings. If your account does not have any open issues such as unpaid bills, unfulfilled orders, unresolved cases, or policy violations, you will receive an email with instructions to confirm your deletion request. This process may take up to approximately two weeks after which your account will be deleted to the extent permitted. Depending on which of our Services you've used (such as whether you've made purchases or sales on Local Guru), we may be required to retain certain information for legal, regulatory, tax, security, or compliance reasons for a limited period of time, after which it will be deleted. This deletion is permanent, and your account cannot be reinstated.&nbsp;</p>
      <ol start="12">
      <li>Privacy Policy Changes</li>
      </ol>
      <p>We may amend or update this policy from time to time. If we believe that the changes are material, we&rsquo;ll let you know by doing one (or more) of the following: (i) posting the changes on or through the Services, (ii) sending you an email or message about the changes, or (iii) posting an update in the version notes on the Apps&rsquo; platform. We encourage you to check back regularly and review any updates.&nbsp;</p>
      <ol start="13">
      <li>Contact</li>
      </ol>
      <p>If you have any questions:&nbsp;</p>
      <p>Contact Local Guru&rsquo;s Support team&nbsp;at help@localguru.com</p>
      <p>Send an email to Local Guru's Data Protection Officer at dpo@LocalGuru.com</p>
      <p>Write to us at following address:</p>
      <p>Local Guru, LLC</p>
      <p>Insert Address</p>
      <p><strong>Requests for Information Policy</strong></p>
      <p>Local Guru aims to be a transparent and mindful company that is completely transparent with our users. This policy explains how we respond to requests for records or information about members of Local Guru&rsquo;s community.</p>
      <p>This policy does not constitute legal advice or a promise that Local Guru will respond in a specific way or at all. Local Guru reserves the right to deviate from these practices at any time. This policy is a part of our&nbsp;Terms of Use. By using Local Guru or requesting information on Local Guru or our members, you&rsquo;re agreeing to this policy and our Terms of Use.&nbsp;</p>
      <ol>
      <li>Member Records and Information<br />2. Local Guru Requires Valid Legal Process<br />3. How to Serve Local Guru with Legal Process to Request Access to Member Information<br />4. Emergency Circumstances (Danger of Death or Serious Injury)<br />5. Notice to the Member Whose Records Are Sought<br />6. Requests for Witness Testimony<br />7. Cost Reimbursement</li>
      <li><strong> Local Guru Member Records and Information</strong></li>
      </ol>
      <p>The information you are seeking may be publicly available. Before you contact Local Guru for records or information, check to see if the member information is publicly available or request the records directly from the relevant Local Guru member.</p>
      <p>Some information about Local Guru buyers and sellers (which we collectively refer to in this policy as &ldquo;Local Guru Members&rdquo;) is public and can be viewed by anyone at any time. In addition, Local Guru members may have access to certain records by logging in to their accounts. For example, Local Guru sellers can access and download sales records in .csv format.</p>
      <p>For more information about the records Local Guru collects, please see our&nbsp;Privacy Policy.&nbsp;</p>
      <ol start="2">
      <li><strong> Local Guru Requires Valid Legal Process</strong></li>
      </ol>
      <p>Except in emergency situations or when consistent with our&nbsp;Terms of Use,&nbsp;Privacy Policy, and applicable law, Local Guru requires valid and sufficient legal process to compel us to disclose records or information about a Local Guru member.&nbsp;</p>
      <p>Legal process must contain enough identifying information so that Local Guru can identify the member&rsquo;s account. Your legal process should include information such as an email address, transaction ID, username, or payment information.</p>
      <ol start="3">
      <li><strong> Serving Local Guru with Legal Process to Request Access to Member Information</strong></li>
      </ol>
      <p>All requests for member information must be made with valid and sufficient legal process. We may be able to expedite our review of your request if, in addition to providing us with proper legal service, you email a copy to <strong>legal@Local Guru.com</strong> (indicating, in the subject line, whether the request is directed to Local Guru, Inc.</p>
      <p>Receipt of legal process by these means is for Local Guru&rsquo;s convenience only and does not waive any objections, including lack of jurisdiction, subpoena power, or improper service.</p>
      <p>As a US-based company, Local Guru may require that non-US legal process be domesticated under a Mutual Legal Assistance Treaty (&ldquo;MLAT&rdquo;), letters rogatory, or section 1782 of the US code, as appropriate.&nbsp;</p>
      <ol start="4">
      <li><strong> Emergency Circumstances (Danger of Death or Serious Injury)</strong></li>
      </ol>
      <p>If your request for information involves an emergency regarding a danger of death or serious physical injury to a member of the Local Guru community or any member of the public, please contact your local law enforcement. If you are a law enforcement officer seeking information relating to such an emergency, please email&nbsp;<a href="mailto:legal@etsy.com"><strong>legal@Local Guru.com</strong></a>&nbsp;from your official email address and provide the following:</p>
      <ol>
      <li>Your name and title, the government agency you work for, and your full contact information (government email address, phone number, and fax number);</li>
      <li>A summary of the facts about the emergency situation, including how the situation poses a danger of death or serious physical injury to an Local Guru member or any person;</li>
      <li>The identity of the person or people who are in danger;</li>
      <li>The specific records sought and how they relate to the emergency; and</li>
      <li>Why legal process cannot be obtained and the records must be disclosed without delay.</li>
      </ol>
      <ol start="5">
      <li><strong> Notice to the Member Whose Records Are Sought</strong></li>
      </ol>
      <p>When our company receives legal process seeking records or information about one of our members, Local Guru may provide notice to that member, including a copy of the legal process. Local Guru may also allow the member enough time to appear and object to the legal process in court, if necessary.&nbsp;</p>
      <ol start="6">
      <li><strong> Requests for Witness Testimony</strong></li>
      </ol>
      <p>Local Guru does not provide expert witnesses for trial or deposition. When Local Guru produces records, we provide a standard records custodian declaration of authenticity. The records are self-authenticating and thus live testimony is unnecessary.</p>
      <ol start="7">
      <li><strong> Cost Reimbursement</strong></li>
      </ol>
      <p>Local Guru may seek reimbursement for our costs directly incurred in searching for, assembling, collecting, and preparing records or information for production.</p>
      <p><strong>Delivery Process</strong></p>
      <ol>
      <ol>
      <li><strong>Delivery of Products.</strong></li>
      </ol>
      </ol>
      <p>Local Guru uses hired contractors to deliver your products to consumers. Local guru relies on your cooperation to process order quickly and ensure the quality of the products being sent to customers.</p>
      <p><strong>Cancellation Policy</strong></p>
      <p>At Local Guru we understand that things happen and sometimes a member may need to cancel a transaction. Under our cancellation policy only Local Guru or a seller can cancel a Local Guru order. If you&rsquo;re a buyer who would like to request a cancellation, please contact the seller directly and discuss the issue.</p>
      <p>A seller may cancel a transaction under the following circumstances:</p>
      <ul>
      <li>The buyer did not pay. (The seller may flag a buyer for a payment not received, chargeback, or canceled payment.)</li>
      </ul>
      <ul>
      <li>Both the buyer and seller agree to cancel the transaction before shipment, and the seller has issued the buyer a full refund.</li>
      </ul>
      <ul>
      <li>The buyer and seller agreed that the buyer could return the item to the seller for a refund. The seller has received the returned item and issued a refund to the buyer for the item. Shipping cost will not be refunded.</li>
      </ul>
      <p><strong>All cancellations must follow these policies</strong>:</p>
      <ul>
      <li>The order meets one of the above criteria.</li>
      <li>The buyer has not yet received their item. (Received orders don&rsquo;t qualify for cancellation.)</li>
      <li>The cancellation meets all of Local Guru policies, including our&nbsp;Anti-Discrimination Policy.</li>
      </ul>
      <p>Local Guru may cancel orders in special circumstances including fraud or other scenarios that place Local Guru buyers or sellers at risk. Local Guru has full discretion in canceling orders.</p>
      <p><br /><br /><br /></p>
    </Wrapper>
    <Footer/>
    </>
  )
};

export default Terms;
