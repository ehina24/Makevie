-- ユーザー情報テーブル
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level INT DEFAULT 1
);

-- 一週間ミッション情報テーブル
CREATE TABLE missions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    day_number INT
);

-- ミッション達成情報テーブル
CREATE TABLE user_missions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    mission_id INT,
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(mission_id) REFERENCES missions(id)
);

-- コスメ情報テーブル
CREATE TABLE cosmetics(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    brand VARCHAR(100),
    category VARCHAR(50),
    description TEXT
);

-- usersテーブルにデータを入れる
INSERT INTO users(name,level)
VALUES(
    "あや",
    1
);
INSERT INTO users(name,level)
VALUES(
    "かな",
    3
);

-- missionsテーブルにデータを入れる
INSERT INTO missions(title,description,category,day_number)
VALUES(
    "アイメイク前に知っておきたいこと",
    "アイメイクに準備する物を学ぶ",
    "eye",
    1
);
INSERT INTO missions(title,description,category,day_number)
VALUES(
    "基本的なアイメイクを練習",
    "アイメイクの基本を学ぶ",
    "eye",
    2
);

-- cosmeticsテーブルにデータを入れる
INSERT INTO cosmetics(name,brand,category,description)
VALUES(
    "シルキースフレアイズ",
    "CANMAKE",
    "eye",
    "透けツヤ4色アイシャドウ"
);
INSERT INTO cosmetics(name,brand,category,description)
VALUES(
    "トーンアップアイシャドウ",
    "CEZANNE",
    "eye",
    "3色で簡単に明るく大きな目元に"
);