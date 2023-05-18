import Header from "../Header";
import Navigator from "../navigator";

function Layout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      <Navigator />
      <div className='content'> {children}</div>
    </div>
  );
}
export default Layout;
