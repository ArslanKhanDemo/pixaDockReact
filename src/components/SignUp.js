import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function SignUp(props) {
    let navigate = useNavigate();
    const [contryCode, setContryCode] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [DOB, setDOB] = useState('');
    const [termAndConditions, setTermAndConditions] = useState(true);
    const [privacyPolicy, setPrivacyPolicy] = useState(true);

    const [data, setData] = useState(); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);











    const handleSignUp = async (event) => {
        event.preventDefault();

        if (isLoading) {

            //props.showAlert("warning", "Loading", "Please wait...") && <div>Error: {error}</div>;;
        }
        try {
            console.log("termAndConditions:",termAndConditions);
            const response = await fetch('http://localhost:5000/api/user/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    contryCode, 
                    phone, 
                    firstName, 
                    lastName, 
                    userName, 
                    email, 
                    password, 
                    DOB, 
                    termAndConditions, 
                    privacyPolicy })
                
                // {
                //     "contryCode":"92",
                //     "phone": "3454674656",
                //     "firstName": "Arslan",
                //     "lastName": "Azhar",
                //     "userName": "Arsal",
                //     "email": "arslanazhar.i9300@gmail.com",
                //     "password": "Good123",
                //     "DOB": "2000-03-20",
                //     "termAndConditions": "true",
                //     "privacyPolicy": "true"
                // }
                
            });

            if (response.ok) {
                console.log('Regitration successful: ', response);
                // Successful login, perform further actions (e.g., redirect, update state)
                let data = await response.json();
                setIsLoading(false);
                props.setAlert(null);
                setData(data);
                console.log("SignUp response data:",data );
                props.showAlert("success", "Success", "Registration");
                
                navigate('/login');
            } if (response.ok === false) {
                // Handle failed login (e.g., display error message)
                //setIsLoading(false);
                let data = await response.json();
                console.log(data);
                props.setAlert(null);
                //props.showAlert("success", "Success", "Authorized User");
                props.showAlert("danger", "Failed", `${data.result.error}`);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }



















    return (
        <>
            {/* <div className="display-1">SignUp</div> */}
            <div className="container mt-5 mb-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title display-1 text-center mb-3">SignUp</h5>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-group">
                                    <br />
                                        <input
                                            placeholder='Country Code'
                                            type="text"
                                            className="form-control"
                                            id="contryCode"
                                            value={contryCode}
                                            onChange={(e) => setContryCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />   
                                        <input
                                            placeholder='Active Phone Number'
                                            type="phone"
                                            className="form-control"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />  
                                        <input
                                            placeholder='First Name'
                                            type="firstName"
                                            className="form-control"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />   
                                        <input  
                                            placeholder='Last Name'
                                            type="lastName"
                                            className="form-control"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />  
                                        <input
                                            placeholder='User Name'
                                            type="userName"
                                            className="form-control"
                                            id="userName"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />  
                                        <input  
                                            placeholder='Email'
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />   
                                        <input
                                            placeholder='Password'
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                    <br />   
                                        <input
                                            placeholder='Date Of Birth'
                                            type="DOB"
                                            className="form-control"
                                            id="DOB"
                                            value={DOB}
                                            onChange={(e) => setDOB(e.target.value)}
                                            required
                                            />
                                        <p>Please Provide Your Date of Birth in (YYYY-MM-DDD) format</p>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="form-check">
                                        <div className="container">
                                            {termAndConditionsDetails}
                                        </div>
                                        <input className="form-check-input" type="checkbox" id="termAndConditions"
                                            
                                            onChange={(e) => setTermAndConditions(e.target.value)}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="termAndConditions">I agree to the terms and conditions</label>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="form-check">
                                        <div className="container">
                                            {privecyPolicyDetail}
                                        </div>
                                        <input className="form-check-input" type="checkbox" id="privacyPolicy"
                                            onChange={(e) => setPrivacyPolicy(e.target.value)}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="privacyPolicy">I agree to the privacyPolicy</label>
                                    </div>
                                    <br />
                                    <div className="container">
                                        <div className="col">

                                            <button type="submit" className="btn btn-primary justify-content-end">Register</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
        </>
    )
}

export default SignUp













let termAndConditionsDetails = <textarea className="form-control" rows="4">
Pixadock Operating, LLC is the owner and operator of www.pixadock.com and any affiliated websites and related mobile versions (“Pixadock, us, our, ours, etc.”). Pixadock is a stock photography platform that allows content Sellers (“Sellers”) to sell stock photos and other digital goods and services (“Photos”) to buyers (“Buyers”). These Terms of Use are a legal contract that establishes the relationship between you, the user, (“you, your, yours, etc.”) and us as it relates to the services we provide to you through Pixadock (“Services”), including all text, images, graphics, photographs, audio, video, buttons, icons, animations, data, messages, software, and other content, information, or materials on Pixadock, (“Materials”), and any Materials posted to or otherwise shared on Pixadock by you (“Content”).

By accessing Pixadock or using the Services, you accept and agree to our website policies, including these Terms of Use, and you certify to us that (a) you are eighteen (18) years of age or older, and are at least the age of majority in your jurisdiction, (b) you have the legal capacity to enter into and agree to these Terms of Use, (c) you are using the Services freely, voluntarily, willingly, and for your own personal enjoyment, and (d) you will only provide accurate and complete information to us and will promptly update this information as necessary to maintain its accuracy and completeness.

We reserve the right to revise these Terms of Use at any time. You agree that we have this unilateral right, and that all modifications or changes are in force and enforceable immediately upon posting. The updated version supersedes any prior versions immediately upon posting, and the prior version is of no continuing legal effect unless the revised version specifically refers to the prior version and keeps the prior version or portions thereof in effect. We agree that if we change anything in these Terms of Use, we will change the “Last Updated” date at the top of these Terms of Use. You agree to re-visit this page on a frequentbasis, and to use the “Refresh” button on your browser when doing so. You agree to note the date above. If the “Last Updated” date remains unchanged from the last time you reviewed these Terms of Use, then you may presume that nothing in these Terms of Use has changed since the last time you visited. If the “Last Updated” date has changed, then you must review the updated Terms of Use in their entirety. You must agree to any updated Terms of Use or immediately cease use of Pixadock. If you fail to review these Terms of Use as required to determine if any changes have been made, you assume all responsibility for such omission, and you agree that such failure amounts to your affirmative waiver of your right to review the updated terms. We are not responsible for your neglect of your legal rights.

From time to time, we may offer virtual coins (“Coins”) to certain users thatengage in qualifying activities, as described in our [Link: Promo Rules]. These virtual coins entitle qualifying users to participate in virtual games for a chance to win cash prizes (“Prizes”).

We are not a gambling service, we do not take or place illegal bets, and we do not recommend or encourage illegal gambling. Instead, we offer qualifying users the opportunity to play games for a chance to win Prizes in connection with and incidental to the sale of Photos. This activity falls outside the prohibitions imposed by state and federal gambling laws. Gambling, whether in-person or online, is not legal in all areas. If you seek information regarding any illegal activity, you must leave Pixadock immediately and shall not attempt to use the Services. You agree not to use the Services if doing so would violate the laws of your state, province, or country. Please consult with your local authorities or legal advisors before participating in online gaming of any kind. It is your sole and absolute responsibility to comply with all applicable laws, and you assume all risk in using the Services. Nothing on Pixadock shall be construed as legal advice on any activity relating to gambling. You assume all risk and responsibility for your use of the Services. We bear no responsibility for your use of the Services in connection with illegal gambling activities, and we do not condone illegal gambling. You understand and agree that the Services are for entertainment purposes only. We make no guarantee that the Services are legal in your jurisdiction.

Accounts

Registration

All users may register for a single account on Pixadock, provided you meet the requirements set forth herein and otherwise abide by these Terms of Use. To purchase Photos on Pixadock as a Buyer, you must also provide a valid payment method. To sell your Content on Pixadock as a Seller or to win Prizes, you must also submit valid and current banking information and any other necessary documentation or information requested by us.

Accuracy

If you fail to provide the required information, if we reasonably believe that you have provided false, misleading, inaccurate, incomplete, not current, or otherwise incorrect information to us, if you fail to promptly update such information to maintain its accuracy and completeness, or if we or any of our authorized agents have reasonable grounds to suspect that a violation of this provision has occurred, we may suspend or terminate your account, as well as subject you to criminal and civil liability. Acceptance of registration is subject to our sole discretion. While we may require you to provide additional information as necessary to verify the accuracy of your identity and the information you provide to us, you understand and agree that we do not sponsor or endorse any user, or any Materials posted by our users.

No Account Sharing

You will not use, attempt to access, or ask for the login credentials for any third party’s account at any time. You will not allow any third party to access or use your account at any time, nor provide any third party with your login credentials. We will not be liable for any loss that you may incur as a result of any third party that uses your password or otherwise accesses your account, either with or without your knowledge. You will be liable for losses incurred by us or any third party due to release of account credentials to unauthorized persons.

Termination by You

You may delete your account by clicking “Delete Account” in your account settings.  You will not assign, transfer, sell, or share your membership to Pixadock. If you do, both you and any unauthorized user are jointly and severally liable for any fees that will be due.

Termination by Us

We may suspend or delete your account or any licenses herein at any time, for any reason, in our sole discretion. We have the right to terminate your membership at any time, and you will be responsible for all charges to your account at the time of termination. We are not responsible for preserving terminated account information which may be permanently deleted in our discretion.

Grant of Rights

Materials

You understand that all we are offering you is access to Pixadock and use of the Services as we provide them from time to time. You need to provide your own access to the Internet, hardware, and software, and you are solely responsible for any fees that you incur to access Pixadock or use the Services. All users may access certain public areas of Pixadock and use the Services and the Materials therein, free of charge. We grant all users a limited, nonexclusive, revocable, and nontransferable personal license to access and use only those Materials provided on free areas of Pixadock for private, non-commercial purposes on a single computer or mobile device. This free license does not include a license to access or use paid areas of Pixadock or the Materials therein. If you are a Buyer or Seller, we also grant you a limited, nonexclusive, revocable, and nontransferable personal license to access Pixadock and use the Services and the Materials therein, as limited by your purchase of certain paid features and upgrades, including Photos. This paid license is for private, non-commercial purposes on a single computer or mobile device. We reserve the right to limit the amount of Materials viewed or Services available to you. Your license to access Pixadock and use the Services and the Materials is not a transfer of title. You will not copy or redistribute any Material, and you will prevent others from unauthorized access, use of, or copying of the Materials.

Content

We may permit you to submit Content to Pixadock for inclusion in our database. Except for personally identifiable information covered under our Privacy Policy, we will consider Content submitted to Pixadock non-confidential and nonproprietary. We will have no obligation regarding Content, and we do not guarantee any confidentiality for any Content. You are solely responsible for the Content and the consequences of posting the Content to Pixadock.

You retain all ownership rights in the Content. However, you grant us a worldwide, perpetual, nonexclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, perform, resell, and license the Content for our business (and the business of our successors), including for promoting and redistributing any part of Pixadock (and derivative works of it) in any media formats and through any media channels for the purposes set forth in these Terms of Use. This license shall include the right to copy and transfer the Content to any affiliate or related or partner sites of ours, and to post the Content on different pages of Pixadock at our sole discretion. We may freely use this Content for any purpose.

Further, you grant each user of Pixadock a worldwide, nonexclusive, royalty-free license to access, use, view, display, and perform the Content through Pixadock, as permitted through Pixadock and under these Terms of Use, and as limited by that user’s additional purchases.

You understand and agree that you may only share Content that depicts one or more third parties if those third parties have consented to being depicted in the Content and to the Content being distributed on the Internet. We may require you to provide proof of such consent. We shall only be responsible for compensating the account of the Seller from which the sale of the Content is made. We are not responsible for compensating any depicted individual. You are solely responsible for segregating, dividing, and distributing any revenue generated from any such Content. Any such revenue sharing arrangement shall be governed solely by an independent, private agreement between you and the depicted individual(s). We are not responsible for enforcing any such agreements. You agree to release us, and hold us harmless, from any and all claims arising from such Content. You further agree that any claim arising from such Content shall be asserted only against the individual(s) participating or appearing therein, and not against us.

Acceptable Use Policy

Prohibited Uses for All Users

You agree that you will only use Pixadock, the Services, and the Materials for purposes expressly permitted and contemplated by these Terms of Use. You may not use Pixadock, the Services, or the Materials for any other purposes without our express prior written consent. Without our express prior written authorization, you will not:
post, upload, or share Content depicting any person under eighteen (18) years old without the consent of that individual’s parent or legal guardian.
post, upload, or share any employment ads or Content which violates anti-discrimination laws.
post, upload, share, or collect the telephone numbers, street addresses, last names, email addresses, URLs, geographic location, or any other personal information about users or third parties without their consent, or, except as expressly authorized in these Terms of Use.
impersonate another individual or entity, whether actual or fictitious; falsely claim an affiliation with any individual or entity; access the accounts of others without permission; misrepresent the source, identity, or contents of the Materials; or perform any other similar fraudulent activity.
use slang, acronyms, abbreviations, emojis, GIFs, or other media to communicate any activity that violates these Terms of Use.
engage in any other behavior that serves no purpose other than to harass, annoy, or offend users.
engage in platform manipulation, including utilizing bots or other fraudulent means to artificially drive traffic to or purchases of your Content, or links to third party websites.
circumvent, disable, damage, or otherwise interfere with the operations of Pixadock, any user’s enjoyment of Pixadock, or our security-related features or features that prevent, limit, or restrict the use or copying of the Services that enforce limitations on the use of Pixadock or the Materials, by any means, including posting, linking to, uploading, or otherwise disseminating viruses, adware, spyware, malware, logic bombs, Trojan horses, worms, harmful components, corrupted data, or other malicious code, file, or program designed to interrupt, destroy, limit, or monitor the functionality of any computer software or hardware or any telecommunications equipment.
reverse engineer, decompile, disassemble, or otherwise discover the source code of Pixadock or any part of it, except and only if that activity is expressly permitted by applicable law despite this limitation.
access or use any automated process (such as a robot, spider, scraper, or similar) to access Pixadock in violation of our robot exclusion headers or to scrap all or a substantial part of the Materials (other than in connection with bona fide search engine indexing or as we may otherwise expressly permit).
modify, adapt, translate, or create derivative works based on the Services or any part of them, except and only if applicable law expressly permits that activity despite this limitation.
commercially exploit or make available the Services or the Materials therein to third parties including any action to “frame” or “mirror” Pixadock.
take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our technology infrastructure or otherwise make excessive demands on it.
attempt to do any of the acts described in this section or assist or permit any person in engaging in any of the acts described in this section.
Engaging in any Prohibited Use will be considered a breach of these Terms of Use and may result in immediate suspension or termination of the user’s account and access to Pixadock or the platform without notice, in our sole discretion. We may pursue any legal remedies or other appropriate actions against you if you engage in any of the above Prohibited Uses or any unauthorized use of the Services, including civil, criminal, or injunctive relief, forfeiture of revenue and/or winnings, and cancellation of your account. Any unauthorized use of the Services or our computer systems violates these Terms of Use and certain international, foreign, and domestic laws.
Law Enforcement
We will fully cooperate with law enforcement authorities or orders from courts of competent jurisdiction, requesting or directing us to disclose the identity or location of any user in breach of these Terms of Use, in accordance with our privacy policies, law enforcement policies, and applicable law or regulation. If your activity results in Pixadock receiving a subpoena, discovery request, production order, search warrant, or court order that causes Pixadock to incur expenses, court costs, or legal fees for compliance, you agree to reimburse us for any such expenses, costs or legal fees upon our request.
</textarea>





let privecyPolicyDetail = <textarea className="form-control" rows="4">
    Pixadock Operating, LLC is the owner and operator of www.pixadock.com and all affiliated websites and mobile versions (the “Site” or we, us, our, ours, etc.). We respect your privacy and are committed to protecting it through this Privacy Policy (the “Policy”). This Policy describes the types of personal information we may collect from you, the user, (you, your, yours, etc.)  or that you may provide to us when you use the services offered by us on the Site (the “Services”), and our practices for collecting, using, keeping, protecting, and disclosing your personal information.

Please read this Policy carefully to understand our practices regarding your personal information and how we will treat it. If you do not agree with this Policy, your sole choice is to leave the Site. By accessing or using the Site, you agree to this Policy and consent to our collection, use, disclosure, retention, and protection of your information as described in this Policy.

We reserve the right to revise, amend, or modify this Policy at any time and in any manner. We will consider your continued use of the Site after we make changes to this Policy as your acceptance of the changes, so you must periodically revisit this Policy and check the “Last Updated” date above. If changed, this Policy has been updated or edited, and the updated or edited version supersedes any prior versions immediately upon posting.

1.         How old do you have to be to use the Services?

We prohibit anyone under the age of eighteen (18) from accessing the Site or using the Services. We do not knowingly market to or collect or solicit any information from or about anyone under the age of eighteen (18). If you are under the age of eighteen (18), you must not submit information to us and must immediately leave the Site. If we learn that we have collected information from or about a person under the age of eighteen (18), we will delete that information as quickly as possible. If you believe that we might have such information, please contact us at [INSERT EMAIL].

2.         What types of information do we collect about you?

We may collect several types of “personal information” from and about users of the Site, including any information that personally identifies you or that could be reasonably linked to you or your household, including your name; alias; username or other unique personal identifier, password, and security questions and answers; postal, billing, and shipping address; email address; IP address and other Internet network activity information such as browsing history, search history, and online interactions; geolocation data;  credit card or banking information; order history. However, this Policy does not apply to personal information that has been de-identified or that is otherwise publicly available.

3.         How do we collect your personal information?

We collect your personal information directly from you when you provide it to us, such as through:

    The account registration process;
    Your profile information;
    Your purchases and other financial transactions;
    Your linked social media accounts;
    Your responses to any surveys we ask you to complete;
    Your other communications and interactions with us, whether by contact form, phone, mail, email, text, or other means, including on third-party social media platforms; and
    Our technologies, including our servers, log files, cookies, pixel tags, and analytics services.

We also collect your personal information automatically from your computer device or mobile phone and through cookies, web beacons, and other tracking technologies.

This Policy does not apply to information collected by us offline or through any other means, or by any third party that is linked to or accessible through the Site.

4.         Do third parties collect my personal information on the Site?

Third parties including users, advertisers, content or application providers, and third-party plug-ins may provide materials to the site which use cookies, web beacons, or other tracking technologies to collect your personal information, including information about your online activities over time and across different websites and other online services. Those third parties may use this information to provide you with interest-based (behavioral) advertising or other targeted content. We do not control third-party tracking technologies or how third parties use them. Your use of third-party plug-ins are governed by the user terms and privacy policy of the third party that provided that plug-in. If you have any questions about an advertisement or plug-in, you should contact the responsible provider directly.

Please be aware that we do not operate, control, or endorse third-party websites that may be linked on the Site, nor are we responsible for the content or privacy practices of third-party websites. We disclaim any responsibility for your personal information on third-party websites, and we do not make any warranties or representations that any third-party website (or even this Site) will function without error or interruption, that defects will be corrected, or that any third-party websites or their servers are free of viruses or other problems that may harm your computer. We encourage you to be aware when you leave the Site and to read the privacy policies of any third-party website that collects your personal information.

5.         How do we use your personal information?

We may use your personal information:

    To provide you with access to the Site and use of the Services;
    To speed up the Services, such as by automatically updating your account information;
    To recognize you when you return to the Services;
    To personalize the Services according to your preferences and individual interests;
    To notify you about changes to the Services and our policies;
    To carry out our obligations and enforce our rights arising from any contracts between you and us, including this Policy and our [Link: Terms of Use Agreement];
    To monitor and analyze traffic and usage trends related to the Services;
    To verify the integrity and security of the Services;
    To improve the Services and provide customer service;
    To investigate and prevent unauthorized or prohibited uses of the Services;
    For marketing or advertising purposes; and
    For any other purpose with your consent.

6.         Do we share your personal information with third parties?

We may share publicly available information and de-identified information with third parties without restriction. However, we may only disclose your personal information to:

    Our subsidiaries, affiliates, contractors, service providers, and other third parties as necessary to provide the Services to you;
    Potential buyers or other successors in the event of a merger, joint venture, assignment, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of assets including bankruptcy, liquidation, or similar proceeding;
    Law enforcement authorities, government agencies, and private litigants, such as in response to lawful criminal, civil, or administrative process or discovery requests, subpoenas, court orders, writs, or reasonable requests of authorities or persons with the reasonable power to obtain such process;
    Any other party as necessary to identify, contact, or bring legal action against someone who may be violating our policies;
    Any other party to comply with a legal obligation or to protect our legitimate interests;
    Any other party as necessary to protect the rights, property, or safety of us, our users, or the general public, including but not limited to disclosures for the purposes of fraud protection and credit risk reduction; and
    Any other party with your consent.

7.         What choices do you have over your personal information?

We strive to provide you with choices about the personal information you provide directly to us. You can always delete or restrict any personal information that you provided directly to us. We will delete any personal information that you have provided directly to us, if you request to permanently delete your account. However, we may retain your personal information for any use set forth herein. Further, we may refuse to accommodate any change if we believe doing so would violate any law or legal requirement or cause the information to be incorrect.

We also strive to provide you with choices about the personal information that we collect from you automatically. You may refuse to accept cookies by activating the appropriate setting on your browser. To learn how you can manage your other cookies, visit www.allaboutcookies.org/manage-cookies/. However, if you select this setting you may be unable to access certain parts of the Site. Unless you have adjusted your browser setting so that it will refuse cookies, we will issue cookies when you access to the Site.

Do Not Track (“DNT”) is a privacy preference that you can set in your browser. DNT is a way for you to inform websites and services that you do not want certain information about your browser history collected over time and across websites or online services. However, we do not recognize or respond to any DNT signals as the Internet industry works toward defining exactly what DNT means, what it means to comply with DNT, and a common approach to responding to DNT. For more information, visit www.allaboutdnt.com.

We do not control third parties’ collection or use of your personal information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way.

8.         How long do we retain your personal information?

Except as otherwise permitted or required by applicable law or regulation, we will retain your personal information only for as long as necessary to fulfill any use of your personal information set forth herein. However, we reserve the right to retain publicly available information and de-identified information for any legitimate business purpose without further notice to you or your consent.

9.         Is my personal information secure?

We are committed to data security, and we have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, change, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. However, you understand and agree that the transmission of your personal information over the Internet is not completely secure. While we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted through the Site. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures used by the Site.

10.       State Privacy Rights

    Your California Privacy Rights: We do not meet the triggers of California Civil Code §1798.83, because we do not disclose personal information to third parties for direct marketing purposes. We do not meet the triggers of the California Consumer Privacy Act, in part because we do not sell your personal information.
    Nevada: We do not meet the triggers of Nevada Revised Statute Chapter 603A. While we do not sell your personal information, Nevada residents may submit an opt-out request to [INSERT EMAIL] which we will honor if we sell your personal information at a future date.
    Virginia: We do not meet the triggers of Virginia’s Consumer Data Protection Act.
    Colorado: We do not meet the triggers of the Colorado Privacy Act.
    Connecticut: We do not meet the triggers of the Connecticut Data Privacy Act.
    Utah: We do not meet the triggers of the Utah Consumer Privacy Act.

11.       International Users

This Policy is intended to cover collection of personal information within our home jurisdiction. Some countries may require stricter privacy policies than those described in this Policy. If you are accessing the Site from a foreign country, you understand and agree that your personal information may be transferred to, stored, and processed in our home jurisdiction or the jurisdiction of the third parties described herein, and that the data protection and other laws of our home jurisdiction or the jurisdiction of such third parties might not be as comprehensive as those in your country.

12.       No Third-Party Rights This Policy does not create rights enforceable by third parties or require disclosure of any personal information relating to users of the Services. 
</textarea>