import type { NextPage } from "next";
import Layout from "ui/Layout";
import Game from "features/game/modules/Game";
import { useRouter } from "next/router";

const GamePage: NextPage = () => {
  const router = useRouter();
  const gameId =
    typeof router.query.gameId == "string" ? router.query.gameId : "";

  return (
    <Layout showNavbar={false} title="Transcendence | Game">
      <Game gameId={gameId} />
    </Layout>
  );
};

export default GamePage;
