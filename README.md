# agentHarness

Рабочая среда для разработки с AI-агентом. Набор правил, шаблонов и автоматических проверок, который задаёт агенту рамки и даёт быструю обратную связь: единый формат веток, коммитов, PR и issue, инструкции для агента и git-хуки, не пропускающие нарушения.

## Что внутри

- **Инструкции для агента** в [`CLAUDE.md`](CLAUDE.md): когда создавать ветки и коммиты, что запрещено, как проверять результат.
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
├── documentation/           # правила и документация проекта
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

Агент читает [`CLAUDE.md`](CLAUDE.md) и следует его правилам. Основные принципы:

- завершить ответ не значит сделать коммит;
- ветка создаётся на задачу, а не на каждый ответ;
- push, PR и issue только по явной просьбе;
- при неуверенности агент спрашивает, а не угадывает.

## Разработка

Единой команды проверки (`npm run check`) пока нет. Когда она появится, добавьте сюда команды запуска, тестов и линтера.

## Лицензия

Лицензия пока не выбрана.
