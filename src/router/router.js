import Game from "../components/Game";
import History from "../components/History";
import Menu from "../components/Menu";
import Quit from "../components/Quit";
import RoundStart from "../components/RoundStart";
import Start from "../components/Start";
import TeamSelect from "../components/TeamSelect";
import Settings from "../components/Settings";
import StepFor from "../components/StepFor";

export const aliasRoutes = [
  { path: "/game", component: Game, exact: true },
  { path: "/history", component: History, exact: true },
  { path: "/alias/menu", component: Menu, exact: true },
  { path: "/quit", component: Quit, exact: true },
  { path: "/roundStart", component: RoundStart, exact: true },
  { path: "/start", component: Start, exact: true },
  { path: "/teamSelect", component: TeamSelect, exact: true },
  { path: "/settings", component: Settings, exact: true },
  { path: "/stepFor", component: StepFor, exact: true },
];
