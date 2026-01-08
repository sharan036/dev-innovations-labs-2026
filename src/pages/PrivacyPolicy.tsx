import React from "react";

const styles = {
  heading: { fontSize: '20px' },
  paragraph: { fontSize: '16px' },
};

const Policy = () => {
  return (
    <div>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        This privacy policy applies to the BeerMug Filling app (hereby referred to as
        "Application") for mobile devices that was created by Dev Innvotions (hereby referred
        to as "Service Provider") as a Free service. This service is intended for use "AS IS".
      </p>
      
      <h2 style={styles.heading}>Information Collection and Use</h2>
      <p style={styles.paragraph}>The Application collects information when you download and use it. This information may include information such as:</p>
      <ul style={styles.paragraph}>
        <li>Your device's Internet Protocol address (e.g. IP address)</li>
        <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
        <li>The time spent on the Application</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <p style={styles.paragraph}>The Application does not gather precise information about the location of your mobile device.</p>

      <h2 style={styles.heading}>Third Party Access</h2>
      <p style={styles.paragraph}>
        Only aggregated, anonymized data is periodically transmitted to external services to aid
        the Service Provider in improving the Application and their service. The Service Provider may
        share your information with third parties in the ways that are described in this privacy statement.
      </p>
      <p style={styles.paragraph}>
        Please note that the Application utilizes third-party services that have their own Privacy Policy
        about handling data. Below are the links to the Privacy Policy of the third-party service providers
        used by the Application:
      </p>
      <ul style={styles.paragraph}>
        <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
        <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
        <li><a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
      </ul>

      <h2 style={styles.heading}>Opt-Out Rights</h2>
      <p style={styles.paragraph}>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

      <h2 style={styles.heading}>Data Retention Policy</h2>
      <p style={styles.paragraph}>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at dev.labs036@gmail.com and they will respond in a reasonable time.</p>

      <h2 style={styles.heading}>Children</h2>
      <p style={styles.paragraph}>
        The Service Provider does not use the Application to knowingly solicit data from or market to children under
        the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal
        information, please contact the Service Provider (dev.labs036@gmail.com) so that they can take the necessary actions.
      </p>

      <h2 style={styles.heading}>Security</h2>
      <p style={styles.paragraph}>The Service Provider is concerned about safeguarding the confidentiality of your information. They provide physical, electronic, and procedural safeguards to protect the information they process and maintain.</p>

      <h2 style={styles.heading}>Changes</h2>
      <p style={styles.paragraph}>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
      
      <p style={styles.paragraph}>This privacy policy is effective as of 2024-02-06</p>

      <h2 style={styles.heading}>Your Consent</h2>
      <p style={styles.paragraph}>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.paragraph}>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at dev.labs036@gmail.com.</p>

      <hr />
      <p style={styles.paragraph}>This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
    </div>
  );
};

export default Policy;