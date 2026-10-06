## Harness – SSD

> Рабочая среда для разработки с агентом.


- **Инструкции для агента** в [`CLAUDE.md`](CLAUDE.md): Точка входа в проект, декларированные инструкции для агента, которые помогают ориентироваться в содержимом проекта.
- **Правила работы с git** в [`documentation/`](documentation/): ветки, коммиты, Pull Request, баг-репорты.
- **Шаблоны GitHub** в [`.github/`](.github/): шаблоны PR и issue, `CONTRIBUTING.md`.
- **Автоматические проверки** через [husky](https://typicode.github.io/husky/) и [commitlint](https://commitlint.js.org/): формат коммитов и имена веток проверяются при каждом коммите.

## Требования

- [Node.js](https://nodejs.org/) и npm
- Git

## Быстрый старт

```bash
git clone git@github.com:stolenstolen/agentHarness.git
cd agentHarness
npm install
```

`npm install` сам подключает git-хуки: скрипт `prepare` запускает husky. Дополнительных действий не нужно.

Проверка, что хуки активны:

```bash
git config core.hooksPath   # ожидаемый вывод: .husky/_
```

## Структура проекта

```
.
├── .github/                 # шаблоны PR и issue, CONTRIBUTING.md
├── .husky/                  # git-хуки: commit-msg, pre-commit
├── documentation/
│   ├── product.md           # описание продукта (живой документ)
│   ├── architecture.md      # архитектура (живой документ)
│   ├── development.md       # правила кода и проверок
│   ├── contributing/        # ветки, коммиты, PR, баг-репорты
│   └── templates/           # шаблоны для product.md и architecture.md
├── CLAUDE.md                # инструкции для агента
├── commitlint.config.mjs    # правила формата коммитов
├── package.json
└── package-lock.json
```

## Работа с git

Ветка на задачу, небольшие коммиты в формате [Conventional Commits](https://www.conventionalcommits.org/), PR по шаблону.

| Что | Формат | Пример |
|---|---|---|
| Ветка | `<тип>/<описание>` | `feat/user-profile`, `fix/482-token-loop` |
| Коммит | `<тип>(<область>): <описание>` | `fix(auth): prevent token refresh loop` |
| Типы | `feat` `fix` `docs` `refactor` `test` `chore` `perf` `ci` | |

Прямые коммиты в `main` запрещены.

### Автоматические проверки

| Хук | Что проверяет |
|---|---|
| `pre-commit` | имя ветки соответствует формату, коммит не в `main` |
| `commit-msg` | сообщение коммита проходит commitlint |

Если хук отклонил коммит, исправьте сообщение или имя ветки. Не обходите хуки через `--no-verify`.

Подробные правила и шаблоны: [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md).

## Работа с агентом

Агент начинает с CLAUDE.md и читает документы по карте. 
Подробные правила (когда создавать ветки и коммиты, как вести документы)
лежат в самих документах.