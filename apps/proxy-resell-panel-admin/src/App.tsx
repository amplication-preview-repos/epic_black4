import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { BalanceList } from "./balance/BalanceList";
import { BalanceCreate } from "./balance/BalanceCreate";
import { BalanceEdit } from "./balance/BalanceEdit";
import { BalanceShow } from "./balance/BalanceShow";
import { ProviderList } from "./provider/ProviderList";
import { ProviderCreate } from "./provider/ProviderCreate";
import { ProviderEdit } from "./provider/ProviderEdit";
import { ProviderShow } from "./provider/ProviderShow";
import { ProxyList } from "./proxy/ProxyList";
import { ProxyCreate } from "./proxy/ProxyCreate";
import { ProxyEdit } from "./proxy/ProxyEdit";
import { ProxyShow } from "./proxy/ProxyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProxyResellPanel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Balance"
          list={BalanceList}
          edit={BalanceEdit}
          create={BalanceCreate}
          show={BalanceShow}
        />
        <Resource
          name="Provider"
          list={ProviderList}
          edit={ProviderEdit}
          create={ProviderCreate}
          show={ProviderShow}
        />
        <Resource
          name="Proxy"
          list={ProxyList}
          edit={ProxyEdit}
          create={ProxyCreate}
          show={ProxyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
