package pkg; /**
 *
 * Package Name: main
 * File Name: Main
 * Description:
 * author: munke
 *
 * @version 1.0
 * @see main
 * @since 2026-07-23
 * <p>
 * Modification Information
 * 수정일          수정자                    수정내용
 * --------- ------------------- -------------------------------
 * 2026-07-23        munke                   최초개정
 */

import java.io.IOException;

public class Application {
    public static void main(String[] args) {
        try {
            throw new ArithmeticException("Top Level Exception.")
                .initCause(new IOException("IO cause."));
        } catch(Throwable ae) {
            System.out.println("Caught : " + ae);
            System.out.println("Actual cause: "+ ae.getCause());
        }
    }
}
