# Unity Gameplay Portfolio

这是一个用于面试展示的个人 Unity 游戏作品集页面，目前包含：

- `猪猪大作战 / Mobile RTS`：Unity 2022.3 + DOTS + URP，重点展示 ECS、Flow Field、程序化地形、战争迷雾、兵营产兵和道具经济。
- `ScrapOrbit / 轨道清道夫`：first playable vertical slice，重点展示磁吸废料、轨道投掷、敌人波次、升级选择、UI Toolkit、存档和测试。

静态发布版本在 `docs/`，适合直接发布到 GitHub Pages。

## GitHub Pages 发布

1. 在 GitHub 创建一个公开仓库，例如 `unity-gameplay-portfolio`。
2. 把本项目推送到该仓库的 `main` 或 `master` 分支。
3. 仓库的 GitHub Actions 会使用 `.github/workflows/pages.yml` 发布 `docs/`。
4. 发布完成后，公开网址通常是：

```text
https://underoneperson.github.io/unity-gameplay-portfolio/
```

如果仓库名不同，把链接里的 `unity-gameplay-portfolio` 换成实际仓库名。
