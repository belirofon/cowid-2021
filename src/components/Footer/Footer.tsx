import './Footer.css';

export const Footer: React.FC = () => (
  <footer className="Footer">
            <div className="Contacts">
                <a href="https://vk.com/nico59" target={"_blank"} rel="noreferrer">
                    <img 
                    src="https://i.ibb.co/jGF69tT/vk.png" alt="В контакте">
                        
                    </img>
                </a>
            </div>
            <div>
                <p>Copyright© Sannikov Nikolai</p>
                <p>2021 Все права защищены</p>
            </div>
        </footer>
);
