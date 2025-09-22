

export default function ContactCard(props) {
  return (
      <article className="contact-card">
        <img
          src={props.personImage}
          alt="Photo of {personName}"
        />
        <h3>{props.personName}</h3>
        <div className="info-group">
          <img src="https://www.iconpacks.net/icons/1/free-phone-icon-504-thumb.png" width="10px" alt="phone icon" />
          <p>{props.personPhone}</p>
        </div>
        <div className="info-group">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/018/931/264/small_2x/black-mail-icon-png.png" width="10px" alt="mail icon" />
          <p>{props.personEmail}</p>
        </div>
      </article>
  );
}
